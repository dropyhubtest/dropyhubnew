import React from 'react';
import JobApplicationWizard from './JobApplicationWizard';
import './Apply.css';

const Apply = () => {
    return (
        <section className="apply section section-alt" id="apply">
            <div className="container">
                <div className="apply__inner">
                    {/* Left: Info & Payroll Perks */}
                    <div className="apply__info">
                        <div className="section-tag">Instant Payroll Onboarding</div>
                        <h2 className="section-title">
                            Start Earning With<br />
                            <span className="gradient-text">Rolling Daily Payouts.</span>
                        </h2>
                        <div className="divider-glow" />
                        <p className="section-sub" style={{ marginBottom: '28px' }}>
                            Apply for leading gig partners (Pronto, Zepto, Zomato, Porter & more) with DropyHub. Connect your free Kotak Salary Account for instant daily rolling settlements.
                        </p>

                        <div className="apply__benefits-list">
                            {[
                                'Daily & Rolling Weekly Direct Bank Transfers',
                                'Mandatory Zero-Balance Kotak Salary Account (₹0 MAB)',
                                'Instant Virtual Debit Card Active in 5 Minutes',
                                'Multi-Platform Job Application with 1 Form',
                                'Zero Registration Fees & 24-Hour Onboarding',
                            ].map(item => (
                                <div key={item} className="apply__benefit-item">
                                    <div className="apply__check">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Kotak Partner Mini-Badge */}
                        <div className="apply__kotak-partner-box">
                            <div className="kotak-partner-badge-top">
                                <span className="kotak-badge-red">kotak</span>
                                <span className="kotak-badge-white">811</span>
                                <span className="kotak-badge-sub">Official Salary Disbursement Partner</span>
                            </div>
                            <p className="kotak-partner-text-sm">
                                All selected candidates are provisioned with an RBI-regulated Kotak 811 account for direct automated payouts.
                            </p>
                        </div>

                        <div className="apply__contact-strip">
                            <div className="apply__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1.12h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.81 12.81 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                                </svg>
                                <span>+91 80082 48111</span>
                            </div>
                            <div className="apply__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>payroll@dropyhub.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Multi-Step Job & Kotak Funnel */}
                    <div className="apply__wizard-container">
                        <JobApplicationWizard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apply;
