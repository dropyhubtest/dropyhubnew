import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'api', 'applications_db.json');

// Helper to save application lead to database file
async function saveLeadToDatabase(leadRecord) {
    try {
        let existing = [];
        if (fs.existsSync(DB_FILE)) {
            const raw = await fs.promises.readFile(DB_FILE, 'utf-8');
            existing = raw ? JSON.parse(raw) : [];
        }
        existing.unshift(leadRecord);
        // Keep latest 1000 records
        if (existing.length > 1000) existing = existing.slice(0, 1000);
        await fs.promises.writeFile(DB_FILE, JSON.stringify(existing, null, 2), 'utf-8');
    } catch (e) {
        console.warn('Could not write to local applications_db.json:', e.message);
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const data = req.body || {};

        // Generate or normalize applicant ID (sub_id)
        const applicantId = data.applicant_id || data.sub_id || `DH-PAYROLL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

        // Target Kotak 811 Zero Balance Savings & Salary Account URL
        const baseKotakUrl = 'https://www.kotak811.bank.in/open-zero-balance-savings-account?utm_source=GoogleSEMiQ&utm_medium=Paid&utm_campaign=iQ-Kotak-BA-Bank-Account-Brand-All-India-Ex-NS-12-25_Non-ZB-Exact&utm_content=kotak%20811&gad_source=1&gad_campaignid=23333657968&gbraid=0AAAAACQ2IDkMJ6SxkI2VPJDbrghz2ZqlI&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9NudcOINkX5MU1njBYP4b1hTQqPoL56vGi8XMJDb4sD1PJfN9HOgrBoCprkQAvD_BwE';
        let kotakTrackingUrl = baseKotakUrl;
        try {
            const urlObj = new URL(baseKotakUrl);
            urlObj.searchParams.set('sub_id', applicantId);
            urlObj.searchParams.set('applicant_id', applicantId);
            if (data.name) urlObj.searchParams.set('name', data.name);
            if (data.phone) urlObj.searchParams.set('phone', data.phone);
            if (data.city) urlObj.searchParams.set('city', data.city);
            if (data.state) urlObj.searchParams.set('state', data.state);
            kotakTrackingUrl = urlObj.toString();
        } catch (e) {
            kotakTrackingUrl = baseKotakUrl;
        }

        const leadRecord = {
            applicantId,
            sub_id: applicantId,
            name: data.name || '',
            phone: data.phone || '',
            email: data.email || '',
            state: data.state || '',
            city: data.city || '',
            area: data.area || '',
            age: data.age || '',
            role: data.role || 'Delivery Partner',
            preferredCompany: data.preferredCompany || ['General'],
            hasBike: data.hasBike || 'N/A',
            drivingLicense: data.drivingLicense || 'N/A',
            experience: data.experience || 'Fresher',
            kotakStatus: 'ACCOUNT_OPENING_PENDING',
            kotakTrackingUrl,
            attribution: data.attribution || {},
            createdAt: new Date().toISOString()
        };

        // Persist to local JSON DB
        await saveLeadToDatabase(leadRecord);

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.dropyhub.com',
            port: process.env.SMTP_PORT || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER || 'delivery@dropyhub.com',
                pass: process.env.SMTP_PASS || 'Dropy-HubDeliver',
            },
        });

        const preferredCompanies = Array.isArray(data.preferredCompany)
            ? data.preferredCompany.join(', ')
            : (data.preferredCompany || 'General Company Platform');

        const mailOptions = {
            from: `DropyHub Payroll & Gig Portal <${process.env.SMTP_USER || 'delivery@dropyhub.com'}>`,
            to: 'delivery@dropyhub.com',
            subject: `[Applicant ${applicantId}] Job Application & Kotak Lead: ${data.name || 'New Candidate'}`,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #f4f6f9; padding: 30px 20px;">
                    <div style="background-color: #ffffff; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 8px 24px rgba(0,0,0,0.06); overflow: hidden;">
                        
                        <!-- Header -->
                        <div style="background-color: #0d1025; padding: 25px; text-align: center; border-bottom: 4px solid #E91E8C;">
                            <img src="https://dropyhub.com/logo.png" alt="DropyHub Logo" style="height: 42px; display: inline-block;" />
                            <div style="margin-top: 10px; font-size: 13px; color: #00E5FF; font-weight: 600; letter-spacing: 0.5px;">
                                COMPANY PAYROLL LEAD & KOTAK DISBURSEMENT LINK
                            </div>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 35px 30px;">
                            <div style="background-color: #f0f7ff; border: 1px solid #bfe0ff; border-radius: 8px; padding: 16px; margin-bottom: 25px; text-align: center;">
                                <span style="font-size: 13px; color: #0056b3; font-weight: 600;">Applicant Tracking Sub-ID:</span>
                                <div style="font-size: 18px; font-weight: 800; color: #003366; letter-spacing: 1px; margin-top: 4px;">${applicantId}</div>
                                <div style="font-size: 12px; color: #666; margin-top: 4px;">Kotak Status: <strong>ACCOUNT_OPENING_PENDING (24h Verification Cycle)</strong></div>
                            </div>

                            <h3 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">Candidate Details</h3>
                            
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 40%; color: #666; font-size: 14px;"><strong>Full Name:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${data.name || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Mobile Number:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">+91 ${data.phone || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Email Address:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${data.email || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Location:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px; font-weight: 600;">${data.area ? `${data.area}, ` : ''}${data.city ? `${data.city}, ` : ''}${data.state || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Job Applied:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #E91E8C; font-size: 14px; font-weight: 700;">${data.role || 'Delivery Partner'} (${preferredCompanies})</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Vehicle Status:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${data.hasBike || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Driving License:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${data.drivingLicense || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; font-size: 14px;"><strong>Experience:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #111; font-size: 14px;">${data.experience || 'Fresher'}</td>
                                </tr>
                            </table>

                            <div style="background-color: #fafbfc; border: 1px solid #eef0f2; border-radius: 8px; padding: 15px; margin-top: 15px;">
                                <div style="font-size: 12px; color: #777;"><strong>Kotak Onboarding URL (With Sub-ID):</strong></div>
                                <div style="font-size: 11px; word-break: break-all; color: #0288D1; margin-top: 4px;">${kotakTrackingUrl}</div>
                            </div>
                        </div>
                        
                        <!-- Footer -->
                        <div style="background-color: #fcfcfc; padding: 18px; text-align: center; border-top: 1px solid #eeeeee;">
                            <small style="color: #888888; font-size: 12px;">DropyHub Automated Payroll Lead System • All rights reserved.</small>
                        </div>
                    </div>
                </div>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailErr) {
            console.warn('Email notification warning (continuing lead flow):', emailErr.message);
        }

        return res.status(200).json({
            success: true,
            applicant_id: applicantId,
            sub_id: applicantId,
            kotakTrackingUrl,
            message: 'Application recorded and stored in database. Proceeding to Kotak KYC.'
        });

    } catch (error) {
        console.error('Error processing application:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to process application.',
            error: error.message
        });
    }
}
