import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const data = req.body;

        // Configure Nodemailer transporter based on company email settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.dropyhub.com',
            port: process.env.SMTP_PORT || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'delivery@dropyhub.com',
                pass: process.env.SMTP_PASS || 'Dropy-HubDeliver',
            },
        });

        const mailOptions = {
            from: `DropyHub Website <${process.env.SMTP_USER || 'delivery@dropyhub.com'}>`,
            to: 'delivery@dropyhub.com',                     // The destination address you requested
            subject: `New Warehouse & Stores Application: ${data.name}`,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #f4f6f9; padding: 30px 20px;">
                    <div style="background-color: #ffffff; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 8px 24px rgba(0,0,0,0.06); overflow: hidden;">
                        
                        <!-- Box Header with Logo -->
                        <div style="background-color: #1a1a1a; padding: 25px; text-align: center; border-bottom: 4px solid #D81B60;">
                            <img src="https://dropyhub.com/logo.png" alt="DropyHub Logo" style="height: 45px; display: inline-block;" />
                        </div>
                        
                        <!-- Box Content -->
                        <div style="padding: 40px 30px;">
                            <h2 style="color: #D81B60; text-align: center; margin: 0 0 10px 0; font-size: 22px; text-transform: uppercase; letter-spacing: 0.5px;">Warehouse & Stores Application</h2>
                            <p style="text-align: center; color: #555; font-size: 15px; margin: 0 0 35px 0;">A new candidate has registered for warehouse/store operations.</p>
                            
                            <div style="background-color: #fafbfc; border: 1px solid #eef0f2; border-radius: 8px; padding: 25px;">
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 45%; color: #666; font-size: 15px;"><strong>1. Full Name:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 15px;"><strong>2. Mobile Number:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 15px;"><strong>3. City:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.city}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 15px;"><strong>4. Area / Location:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.area}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 15px;"><strong>5. Age:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.age}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 15px; vertical-align: top;"><strong>6. Preferred Store:</strong></td>
                                        <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${data.preferredStore?.length > 0 ? data.preferredStore.join(', ') : 'None selected'}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 10px 0; color: #666; font-size: 15px;"><strong>7. Experience:</strong></td>
                                        <td style="padding: 10px 0; color: #111; font-size: 15px; font-weight: 600;">${data.experience}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        
                        <!-- Box Footer -->
                        <div style="background-color: #fcfcfc; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
                            <small style="color: #999999; font-size: 13px;">This email was automatically generated from the DropyHub website form.</small>
                        </div>
                    </div>
                </div>
            `,
        };

        const result = await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Application sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send application.', error: error.message });
    }
}
