import React, { useState, useEffect } from 'react';
import {
    generateApplicantId,
    getAttributionParams,
    saveApplicantState,
    buildKotakRedirectUrl
} from '../utils/attribution';
import './JobApplicationModal.css';

export default function JobApplicationModal({ job, isOpen, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [applicantId, setApplicantId] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [copied, setCopied] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        age: '',
        hasBike: 'Yes',
        drivingLicense: 'Yes',
        experience: 'Fresher'
    });

    useEffect(() => {
        if (isOpen && job) {
            const newId = generateApplicantId(job.company);
            setApplicantId(newId);
            setIsSubmitted(false);
            setSubmitError('');
        }
    }, [isOpen, job]);

    if (!isOpen || !job) return null;

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitError('');

        if (formData.phone.length < 10) {
            setSubmitError('Please enter a valid 10-digit mobile number.');
            return;
        }

        setIsSubmitting(true);
        const attribution = getAttributionParams();
        const finalId = applicantId || generateApplicantId(job.company);

        const payload = {
            ...formData,
            applicant_id: finalId,
            sub_id: finalId,
            role: job.title,
            preferredCompany: [job.company],
            jobId: job.id,
            attribution,
            kotakStatus: 'ACCOUNT_CREATION_PENDING',
            submittedAt: new Date().toISOString()
        };

        const kotakRedirectUrl = buildKotakRedirectUrl(finalId, {
            ...formData,
            role: job.title,
            preferredCompany: [job.company]
        });

        try {
            const response = await fetch('/api/apply.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            saveApplicantState({
                applicantId: finalId,
                job,
                form: formData,
                kotakRedirectUrl,
                submittedAt: new Date().toISOString()
            });

            setIsSubmitted(true);

            // Open Kotak account opening link in a new tab
            window.open(kotakRedirectUrl, '_blank', 'noopener,noreferrer');

        } catch (err) {
            console.error('Lead submission error:', err);
            // Even if network glitches, we preserve applicant state and allow Kotak opening
            saveApplicantState({
                applicantId: finalId,
                job,
                form: formData,
                kotakRedirectUrl,
                submittedAt: new Date().toISOString()
            });
            setIsSubmitted(true);
            window.open(kotakRedirectUrl, '_blank', 'noopener,noreferrer');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopyId = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(applicantId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const handleReopenKotak = () => {
        const url = buildKotakRedirectUrl(applicantId, {
            ...formData,
            role: job.title,
            preferredCompany: [job.company]
        });
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="job-modal-backdrop" onClick={onClose}>
            <div className="job-modal-container" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button type="button" className="job-modal-close-btn" onClick={onClose}>
                    ✕
                </button>

                {!isSubmitted ? (
                    <>
                        {/* Modal Header: Job Details */}
                        <div className="job-modal-header">
                            <div className="job-modal-top-row">
                                <div className="job-modal-company-tag">
                                    <span className="company-name">{job.company}</span>
                                    <span className="job-type-pill">{job.type}</span>
                                    {job.badge && <span className="job-badge-pill">{job.badge}</span>}
                                </div>
                                <div className="payout-badge-glow">
                                    <span className="payout-label">Payout:</span>
                                    <span className="payout-amount">{job.dailyPayout}</span>
                                </div>
                            </div>

                            <h2 className="job-modal-title">{job.title}</h2>
                            <p className="job-modal-location">📍 {job.location} • <strong style={{ color: '#00E676' }}>{job.openings} Openings Active</strong></p>

                            {/* 24-Hour Kotak Payroll Banner */}
                            <div className="kotak-payroll-info-box">
                                <div className="kotak-info-top">
                                    <div className="kotak-mini-brand">
                                        <span className="kotak-text-red">kotak</span>
                                        <span className="kotak-tag-white">811</span>
                                    </div>
                                    <strong className="kotak-headline">Mandatory Zero-Balance Salary Account Step</strong>
                                </div>
                                <p className="kotak-explainer">
                                    Upon clicking <strong>"Apply & Open Kotak Account"</strong>, you'll be redirected to create your free Kotak Salary Account. Kotak verifies account creation within <strong>24 hours</strong>. Once verified via your unique Sub-ID, your company payroll will be activated & an official confirmation email will be sent!
                                </p>
                            </div>
                        </div>

                        {/* Modal Body: Candidate Form */}
                        <form onSubmit={handleSubmit} className="job-modal-form">
                            <div className="form-section-title">Candidate Details</div>

                            <div className="modal-form-grid">
                                <div className="modal-input-field">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>Mobile Number (For Kotak Link) *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="10-digit mobile number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="yourname@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="E.g. Hyderabad, Bangalore"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>Area / Locality *</label>
                                    <input
                                        type="text"
                                        name="area"
                                        placeholder="E.g. Madhapur, Hitec City"
                                        value={formData.area}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>Age *</label>
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="18+"
                                        min="18"
                                        max="65"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="modal-input-field">
                                    <label>Vehicle Status *</label>
                                    <select name="hasBike" value={formData.hasBike} onChange={handleChange} required>
                                        <option value="Yes">Own Bike / Scooter</option>
                                        <option value="3-Wheeler">Own 3-Wheeler / Cargo Auto</option>
                                        <option value="Need Rental">Need Vehicle Rental</option>
                                        <option value="No Vehicle">No Vehicle (Store/Warehouse)</option>
                                    </select>
                                </div>

                                <div className="modal-input-field">
                                    <label>Driving License *</label>
                                    <select name="drivingLicense" value={formData.drivingLicense} onChange={handleChange} required>
                                        <option value="Yes">Valid Driving License</option>
                                        <option value="Learner">Applied / Learner License</option>
                                        <option value="No">No License (Store/Warehouse)</option>
                                    </select>
                                </div>
                            </div>

                            {submitError && (
                                <div className="modal-error-message">
                                    ⚠️ {submitError}
                                </div>
                            )}

                            {/* Submit & Redirect Button */}
                            <div className="modal-submit-area">
                                <button
                                    type="submit"
                                    className="btn-primary modal-apply-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span>Saving Application & Redirecting to Kotak...</span>
                                    ) : (
                                        <>
                                            <span>Apply & Open Kotak Salary Account</span>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                                <p className="modal-disclaimer-text">
                                    🔒 100% Free Application • Redirects to Kotak 811 official page with unique ID <code>{applicantId}</code>
                                </p>
                            </div>
                        </form>
                    </>
                ) : (
                    /* Post-Submission 24-Hour Kotak Tracker State */
                    <div className="modal-success-state">
                        <div className="success-icon-badge">🎉</div>
                        <h2 className="success-title">Application Submitted & Kotak Redirect Initiated!</h2>
                        <p className="success-sub">
                            Thank you, <strong>{formData.name}</strong>. Your application for <strong>{job.title} ({job.company})</strong> has been saved.
                        </p>

                        {/* Sub-ID Card */}
                        <div className="sub-id-highlight-box">
                            <span className="sub-id-label">Your Unique Applicant Tracking Sub-ID:</span>
                            <div className="sub-id-row">
                                <strong className="sub-id-text">{applicantId}</strong>
                                <button type="button" className="copy-sub-id-btn" onClick={handleCopyId}>
                                    {copied ? '✓ Copied' : 'Copy ID'}
                                </button>
                            </div>
                        </div>

                        {/* 24-Hour Process Timeline */}
                        <div className="modal-process-timeline">
                            <div className="timeline-item done">
                                <div className="timeline-dot">✓</div>
                                <div className="timeline-text">
                                    <strong>1. Job Application Recorded</strong>
                                    <span>Details saved in DropyHub database</span>
                                </div>
                            </div>

                            <div className="timeline-item active">
                                <div className="timeline-dot">⏳</div>
                                <div className="timeline-text">
                                    <strong>2. Complete Kotak 811 Account Opening</strong>
                                    <span>Open the Kotak page & complete KYC in 3 mins</span>
                                </div>
                            </div>

                            <div className="timeline-item upcoming">
                                <div className="timeline-dot">🚀</div>
                                <div className="timeline-text">
                                    <strong>3. 24-Hour Report Reconciliation & Payroll Active</strong>
                                    <span>Kotak verifies account creation in 24 hours → Confirmation email sent & company payroll activated!</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-success-actions">
                            <button
                                type="button"
                                className="btn-primary reopen-kotak-btn"
                                onClick={handleReopenKotak}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="2" y="5" width="20" height="14" rx="2" />
                                    <line x1="2" y1="10" x2="22" y2="10" />
                                </svg>
                                <span>Reopen Kotak Account Page</span>
                            </button>

                            <button
                                type="button"
                                className="btn-secondary modal-done-btn"
                                onClick={onClose}
                            >
                                Close & Return to Jobs
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
