import React, { useState, useEffect } from 'react';
import KotakOnboardingCard from './KotakOnboardingCard';
import {
    generateApplicantId,
    getAttributionParams,
    saveApplicantState,
    getSavedApplicantState,
    buildKotakRedirectUrl
} from '../utils/attribution';
import './JobApplicationWizard.css';

const PLATFORMS = [
    { name: 'Pronto', tag: 'Fast Delivery & Cargo', icon: '⚡', color: '#FF3D00' },
    { name: 'Zepto', tag: '10-Min Quick Commerce', icon: '🟣', color: '#880E4F' },
    { name: 'Zomato', tag: 'Food & Fleet Delivery', icon: '🔴', color: '#E23744' },
    { name: 'Porter', tag: 'Intra-City Cargo & Truck', icon: '🚚', color: '#0288D1' },
    { name: 'Blinkit', tag: 'Grocery & Dark Store', icon: '🟡', color: '#F57F17' },
    { name: 'Swiggy', tag: 'Food & Instamart', icon: '🟠', color: '#FC8019' },
    { name: 'Rapido', tag: 'Bike Taxi & Parcel', icon: '🛵', color: '#FFD600' },
    { name: 'Amazon Flex', tag: 'E-Commerce Packages', icon: '📦', color: '#232F3E' },
    { name: 'Shadowfax', tag: 'Omni-Channel Logistics', icon: '🔵', color: '#1565C0' },
];

const JOB_ROLES = [
    { id: 'bike_delivery', label: 'Bike / Scooter Delivery Executive', estDaily: '₹950 - ₹1,650/day', icon: '🛵' },
    { id: 'cargo_driver', label: '3-Wheeler & Cargo Logistics Driver', estDaily: '₹1,500 - ₹2,600/day', icon: '🚚' },
    { id: 'dark_store', label: 'Dark Store Picker & Packer (Zepto / Blinkit)', estDaily: '₹850 - ₹1,400/day', icon: '🏪' },
    { id: 'warehouse_ops', label: 'Warehouse & Fulfillment Associate', estDaily: '₹1,000 - ₹1,750/day', icon: '📦' },
];

export default function JobApplicationWizard({ initialRole = null }) {
    // Current Step: 1 = Application, 2 = Kotak KYC Gate, 3 = Status Dashboard
    const [currentStep, setCurrentStep] = useState(1);
    const [applicantId, setApplicantId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [copied, setCopied] = useState(false);

    // Form state
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        area: '',
        age: '',
        role: initialRole ? initialRole.title : 'Bike / Scooter Delivery Executive',
        preferredCompany: ['Pronto', 'Zepto'],
        hasBike: 'Yes',
        bikeModel: '',
        bikeReg: '',
        drivingLicense: 'Yes',
        experience: 'Fresher',
        employmentStatus: 'Not Working',
        message: ''
    });

    // Initialize attribution and resume saved applicant state if available
    useEffect(() => {
        const attribution = getAttributionParams();
        const saved = getSavedApplicantState();

        if (saved && saved.applicantId) {
            setApplicantId(saved.applicantId);
            if (saved.form) setForm(prev => ({ ...prev, ...saved.form }));
            if (saved.step) setCurrentStep(saved.step);
        } else {
            const newId = generateApplicantId(form.preferredCompany[0] || 'GIG');
            setApplicantId(newId);
        }
    }, []);

    // Update applicant ID when first company changes
    const handleCompanyToggle = (companyName) => {
        setForm(prev => {
            const exists = prev.preferredCompany.includes(companyName);
            const updated = exists
                ? prev.preferredCompany.filter(c => c !== companyName)
                : [...prev.preferredCompany, companyName];

            // Update applicant ID prefix if needed
            if (!exists && updated.length === 1) {
                const newId = generateApplicantId(companyName);
                setApplicantId(newId);
            }
            return { ...prev, preferredCompany: updated };
        });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // Calculate dynamic rolling payout for the selected role
    const selectedRoleData = JOB_ROLES.find(r => r.label === form.role) || JOB_ROLES[0];

    // Handle Form Submit (Step 1 -> Step 2)
    const handleStep1Submit = async (e) => {
        e.preventDefault();
        setSubmitError('');

        if (form.phone.length < 10) {
            setSubmitError('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (form.preferredCompany.length === 0) {
            setSubmitError('Please select at least one preferred gig partner.');
            return;
        }

        setIsSubmitting(true);
        const attribution = getAttributionParams();
        const finalApplicantId = applicantId || generateApplicantId(form.preferredCompany[0]);

        const payload = {
            ...form,
            applicant_id: finalApplicantId,
            sub_id: finalApplicantId,
            attribution,
            kotakStatus: 'KYC_PENDING',
            submittedAt: new Date().toISOString()
        };

        try {
            const response = await fetch('/api/apply.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            // Save state in storage
            saveApplicantState({
                applicantId: finalApplicantId,
                form,
                step: 2,
                submittedAt: new Date().toISOString()
            });

            setApplicantId(finalApplicantId);
            setCurrentStep(2);

            // Automatically open the Kotak onboarding link in a new tab for seamless conversion
            const kotakUrl = buildKotakRedirectUrl(finalApplicantId, form);
            try {
                window.open(kotakUrl, '_blank', 'noopener,noreferrer');
            } catch (err) {
                console.log('Popup blocked, user can click the button');
            }

        } catch (error) {
            console.error('Submission error:', error);
            // Even if network fails, we advance so the user is never blocked from Kotak KYC
            saveApplicantState({
                applicantId: finalApplicantId,
                form,
                step: 2,
                submittedAt: new Date().toISOString()
            });
            setCurrentStep(2);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Complete Kotak Step (Step 2 -> Step 3)
    const handleCompleteKotak = () => {
        saveApplicantState({
            applicantId,
            form,
            step: 3,
            kotakCompletedAt: new Date().toISOString()
        });
        setCurrentStep(3);
    };

    const handleCopyId = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(applicantId);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const handleReset = () => {
        localStorage.removeItem('dropyhub_applicant_state');
        const newId = generateApplicantId('GIG');
        setApplicantId(newId);
        setCurrentStep(1);
        setForm({
            name: '',
            phone: '',
            email: '',
            city: '',
            area: '',
            age: '',
            role: 'Bike / Scooter Delivery Executive',
            preferredCompany: ['Pronto', 'Zepto'],
            hasBike: 'Yes',
            bikeModel: '',
            bikeReg: '',
            drivingLicense: 'Yes',
            experience: 'Fresher',
            employmentStatus: 'Not Working',
            message: ''
        });
    };

    return (
        <div className="job-wizard-wrap" id="apply-funnel">
            {/* Multi-Step Progress Header */}
            <div className="wizard-progress-bar">
                <div className={`progress-step-node ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                    <div className="node-circle">
                        {currentStep > 1 ? '✓' : '1'}
                    </div>
                    <div className="node-text">
                        <strong>1. Gig Application</strong>
                        <span>Select Role & Details</span>
                    </div>
                </div>

                <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>

                <div className={`progress-step-node ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                    <div className="node-circle">
                        {currentStep > 2 ? '✓' : '2'}
                    </div>
                    <div className="node-text">
                        <strong>2. Kotak Payroll Link</strong>
                        <span className="mandatory-tag">Mandatory Gate</span>
                    </div>
                </div>

                <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>

                <div className={`progress-step-node ${currentStep === 3 ? 'active' : ''}`}>
                    <div className="node-circle">3</div>
                    <div className="node-text">
                        <strong>3. Rolling Payouts Live</strong>
                        <span>Status Dashboard</span>
                    </div>
                </div>
            </div>

            {/* STEP 1: Application Form */}
            {currentStep === 1 && (
                <div className="wizard-step-content glass-card">
                    {/* Live Highlight Banner */}
                    <div className="wizard-payout-highlight">
                        <div className="payout-highlight-icon">⚡</div>
                        <div className="payout-highlight-info">
                            <strong>Rolling Payroll Active for {form.role}:</strong>
                            <span>Estimated Daily Payout: <strong className="green-highlight">{selectedRoleData.estDaily}</strong> (Transferred directly to your free Kotak Salary Account).</span>
                        </div>
                    </div>

                    <form onSubmit={handleStep1Submit} className="wizard-form">
                        <div className="wizard-form-header">
                            <h3 className="wizard-title">Apply for Gig Roles & Activate Rolling Payouts</h3>
                            <p className="wizard-sub">Select your target companies and job role. Zero fees, guaranteed fast onboarding.</p>
                        </div>

                        {/* 1. Preferred Platform Selector */}
                        <div className="wizard-field-group">
                            <label className="field-title">
                                1. Select Preferred Gig Partners * <small>(Choose 1 or more)</small>
                            </label>
                            <div className="platform-pills-grid">
                                {PLATFORMS.map(platform => {
                                    const isSelected = form.preferredCompany.includes(platform.name);
                                    return (
                                        <button
                                            key={platform.name}
                                            type="button"
                                            className={`platform-pill-card ${isSelected ? 'selected' : ''}`}
                                            onClick={() => handleCompanyToggle(platform.name)}
                                        >
                                            <div className="platform-pill-top">
                                                <span className="platform-icon">{platform.icon}</span>
                                                <span className="platform-check">{isSelected ? '✓' : '+'}</span>
                                            </div>
                                            <div className="platform-name">{platform.name}</div>
                                            <div className="platform-tag">{platform.tag}</div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 2. Job Role Selection */}
                        <div className="wizard-field-group">
                            <label className="field-title">2. Choose Job Profile *</label>
                            <div className="role-options-grid">
                                {JOB_ROLES.map(role => (
                                    <label
                                        key={role.id}
                                        className={`role-option-card ${form.role === role.label ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            value={role.label}
                                            checked={form.role === role.label}
                                            onChange={handleChange}
                                        />
                                        <div className="role-option-body">
                                            <div className="role-option-icon">{role.icon}</div>
                                            <div className="role-option-texts">
                                                <strong>{role.label}</strong>
                                                <span className="role-est">{role.estDaily} rolling payout</span>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 3. Personal Details */}
                        <div className="form-two-cols">
                            <div className="wizard-input-field">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="wizard-input-field">
                                <label>Mobile Number (For Kotak Link) *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="10-digit mobile number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-three-cols">
                            <div className="wizard-input-field">
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="E.g. Hyderabad, Mumbai"
                                    value={form.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="wizard-input-field">
                                <label>Area / Location *</label>
                                <input
                                    type="text"
                                    name="area"
                                    placeholder="E.g. Madhapur, Hitec City"
                                    value={form.area}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="wizard-input-field">
                                <label>Age *</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="18+"
                                    min="18"
                                    max="65"
                                    value={form.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* 4. Vehicle & License Details */}
                        <div className="form-two-cols">
                            <div className="wizard-input-field">
                                <label>Vehicle Status *</label>
                                <select name="hasBike" value={form.hasBike} onChange={handleChange} required>
                                    <option value="Yes">Yes, Own Bike / Scooter</option>
                                    <option value="3-Wheeler">Yes, 3-Wheeler / Cargo Auto</option>
                                    <option value="Need Rental">No, Need EV / Bike Rental</option>
                                    <option value="No Vehicle">No Vehicle (Applying for Store / Warehouse)</option>
                                </select>
                            </div>
                            <div className="wizard-input-field">
                                <label>Driving License *</label>
                                <select name="drivingLicense" value={form.drivingLicense} onChange={handleChange} required>
                                    <option value="Yes">Yes, Valid Driving License</option>
                                    <option value="Learners / Applied">Applied / Learning License</option>
                                    <option value="No">No Driving License (Store/Warehouse Only)</option>
                                </select>
                            </div>
                        </div>

                        {/* Conditional Vehicle Info */}
                        {form.hasBike === 'Yes' && (
                            <div className="form-two-cols conditional-box">
                                <div className="wizard-input-field">
                                    <label>Bike Model (Optional)</label>
                                    <input
                                        type="text"
                                        name="bikeModel"
                                        placeholder="E.g. Honda Activa, Hero Splendor"
                                        value={form.bikeModel}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="wizard-input-field">
                                    <label>Vehicle Number (Optional)</label>
                                    <input
                                        type="text"
                                        name="bikeReg"
                                        placeholder="E.g. TS09 AB 1234"
                                        value={form.bikeReg}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}

                        {/* 5. Experience & Status */}
                        <div className="form-two-cols">
                            <div className="wizard-input-field">
                                <label>Previous Gig Experience *</label>
                                <select name="experience" value={form.experience} onChange={handleChange} required>
                                    <option value="Fresher">Fresher (New to gig work)</option>
                                    <option value="0-6 Months">0 - 6 Months Experience</option>
                                    <option value="6-12 Months">6 - 12 Months Experience</option>
                                    <option value="1+ Year">1+ Year Experienced</option>
                                </select>
                            </div>
                            <div className="wizard-input-field">
                                <label>Current Employment Status *</label>
                                <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} required>
                                    <option value="Not Working">Not Working (Immediate Joining)</option>
                                    <option value="Working Part-Time">Working Part-Time</option>
                                    <option value="Working Full-Time">Working Full-Time</option>
                                </select>
                            </div>
                        </div>

                        {submitError && (
                            <div className="wizard-error-banner">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <span>{submitError}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="wizard-submit-bar">
                            <button
                                type="submit"
                                className="btn-primary wizard-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="btn-spinner"></div>
                                        <span>Capturing Lead & Generating Kotak ID...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Application & Proceed to Kotak Payroll Setup</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                            <p className="wizard-submit-footnote">
                                🔒 Step 1 of 2: After submitting, you'll be redirected to activate your mandatory Kotak salary account.
                            </p>
                        </div>
                    </form>
                </div>
            )}

            {/* STEP 2: Kotak KYC Gate */}
            {currentStep === 2 && (
                <div className="wizard-step-content">
                    <KotakOnboardingCard
                        applicantId={applicantId}
                        applicantData={form}
                        onCompleteVerification={handleCompleteKotak}
                        isLoading={isSubmitting}
                    />
                </div>
            )}

            {/* STEP 3: Status Dashboard */}
            {currentStep === 3 && (
                <div className="wizard-step-content glass-card wizard-dashboard-card">
                    <div className="dashboard-header">
                        <div className="dashboard-success-icon">🎉</div>
                        <h3 className="dashboard-title">
                            Application & Payroll Link <span className="gradient-text">Registered!</span>
                        </h3>
                        <p className="dashboard-sub">
                            Welcome aboard, <strong>{form.name || 'Partner'}</strong>. Your application is in review, and your Kotak disbursement routing has been linked.
                        </p>
                    </div>

                    {/* Milestone Progress Tracker */}
                    <div className="milestone-timeline">
                        <div className="milestone-step done">
                            <div className="milestone-icon">✓</div>
                            <div className="milestone-info">
                                <strong>1. Gig Application Submitted</strong>
                                <span>Partner options: {form.preferredCompany.join(', ') || 'General Gig'}</span>
                            </div>
                            <span className="milestone-badge verified">Complete</span>
                        </div>

                        <div className="milestone-step done">
                            <div className="milestone-icon">✓</div>
                            <div className="milestone-info">
                                <strong>2. Kotak Salary Account Link</strong>
                                <span>Sub-ID: <code>{applicantId}</code></span>
                            </div>
                            <span className="milestone-badge in-progress">KYC Linked</span>
                        </div>

                        <div className="milestone-step active">
                            <div className="milestone-icon">⚡</div>
                            <div className="milestone-info">
                                <strong>3. Onboarding & First Rolling Payout</strong>
                                <span>Manager allocation & daily payout cycle starts within 24-48 hrs</span>
                            </div>
                            <span className="milestone-badge upcoming">Next Step</span>
                        </div>
                    </div>

                    {/* Applicant Profile Summary */}
                    <div className="applicant-summary-box">
                        <div className="summary-item">
                            <span className="summary-label">Applicant Tracking Sub-ID</span>
                            <div className="summary-val-copy">
                                <strong>{applicantId}</strong>
                                <button type="button" className="copy-btn" onClick={handleCopyId}>
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>

                        <div className="summary-item">
                            <span className="summary-label">Candidate Name</span>
                            <strong>{form.name}</strong>
                        </div>

                        <div className="summary-item">
                            <span className="summary-label">Mobile Number</span>
                            <strong>+91 {form.phone}</strong>
                        </div>

                        <div className="summary-item">
                            <span className="summary-label">Disbursement Channel</span>
                            <strong style={{ color: '#00E676' }}>Kotak 811 Direct Deposit</strong>
                        </div>

                        <div className="summary-item">
                            <span className="summary-label">Selected Gig Partners</span>
                            <strong>{form.preferredCompany.join(', ')}</strong>
                        </div>

                        <div className="summary-item">
                            <span className="summary-label">Target Location</span>
                            <strong>{form.area ? `${form.area}, ${form.city}` : form.city}</strong>
                        </div>
                    </div>

                    {/* Action Hub */}
                    <div className="dashboard-actions-row">
                        <button
                            type="button"
                            className="btn-primary dashboard-action-btn"
                            onClick={() => {
                                const url = buildKotakRedirectUrl(applicantId, form);
                                window.open(url, '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="2" y="5" width="20" height="14" rx="2" />
                                <line x1="2" y1="10" x2="22" y2="10" />
                            </svg>
                            <span>Resume / Verify Kotak KYC</span>
                        </button>

                        <a
                            href={`https://wa.me/918000000000?text=Hi%20DropyHub%2C%20I%20have%20submitted%20my%20application%20(ID%3A%20${applicantId})%20and%20linked%20my%20Kotak%20account.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary whatsapp-action-btn"
                        >
                            <span>Chat on WhatsApp Support</span>
                        </a>
                    </div>

                    <div className="dashboard-reset-strip">
                        <span>Need to submit another candidate application?</span>
                        <button type="button" className="reset-link-btn" onClick={handleReset}>
                            Start New Application
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
