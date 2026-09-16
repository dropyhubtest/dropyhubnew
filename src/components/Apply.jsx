import React from 'react';
import JobCardGrid from './JobCardGrid';
import './Apply.css';

const Apply = () => {
    return (
        <section className="apply section section-alt" id="apply">
            <div className="container">
                {/* Section Header */}
                <div className="apply__section-header">
                    <div className="section-tag">Instant Company Payroll Onboarding</div>
                    <h2 className="section-title">
                        Choose Your Role & Activate <span className="gradient-text">Kotak Daily Payroll.</span>
                    </h2>
                    <div className="divider-glow" />
                    <p className="section-sub apply__header-desc">
                        Explore verified company openings across leading platforms. Click any role to apply in 60 seconds and link your mandatory <strong>Kotak 811 Zero-Balance Salary Account</strong> for guaranteed 24-hour payroll activation.
                    </p>

                    {/* 24-Hour Process Banner */}
                    <div className="apply__flow-strip glass-card">
                        <div className="flow-step">
                            <div className="flow-step-num">1</div>
                            <div className="flow-step-info">
                                <strong>Select Role & Submit Details</strong>
                                <span>Fill 1-minute candidate form</span>
                            </div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <div className="flow-step-num">2</div>
                            <div className="flow-step-info">
                                <strong>Redirect to Kotak 811</strong>
                                <span>Open free zero-balance account</span>
                            </div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step">
                            <div className="flow-step-num">3</div>
                            <div className="flow-step-info">
                                <strong>24-Hour Verification & Payroll Starts</strong>
                                <span>Verification takes 24 hours → Payroll starts & confirmation email sent!</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Cards Directory & Modal Trigger */}
                <div className="apply__jobs-wrap">
                    <JobCardGrid />
                </div>
            </div>
        </section>
    );
};

export default Apply;
