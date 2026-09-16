import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPage.css';

const PrivacyPage = () => {
    return (
        <section className="privacy-pg section">
            <div className="container">
                <div className="privacy-pg__content glass-card">
                    <div className="privacy-pg__header">
                        <div className="section-tag">Data Protection</div>
                        <h2 className="section-title">Privacy <span className="gradient-text">Policy</span></h2>
                        <div className="divider-glow" />
                    </div>

                    <div className="privacy-pg__body">
                        <p className="privacy-pg__intro-text">
                            At DropyHub, we are committed to protecting the privacy and personal information of our users. Your trust is our priority.
                        </p>

                        <div className="privacy-pg__section">
                            <h3 className="privacy-pg__sub-title">1. Information Collection</h3>
                            <p className="privacy-pg__text">
                                When you use our website or apply for job opportunities, we may collect basic details such as your <strong>name, phone number, email address, and location</strong>.
                            </p>
                        </div>

                        <div className="privacy-pg__info-card">
                            <div className="privacy-pg__info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div className="privacy-pg__info-text">
                                <h3>Purpose of Collection</h3>
                                <p>
                                    This information is collected only to connect you with suitable job opportunities available through various platform-based companies such as Swiggy, Zepto, Blinkit, Rapido, Amazon, Flipkart, and similar service providers.
                                </p>
                            </div>
                        </div>

                        <div className="privacy-pg__section">
                            <h3 className="privacy-pg__sub-title">2. Use of Information</h3>
                            <p className="privacy-pg__text">
                                Your information is used strictly for <strong>recruitment-related communication, application processing, and improving our services</strong>.
                            </p>
                        </div>

                        <div className="privacy-pg__warning glass-card">
                            <div className="privacy-pg__warning-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </div>
                            <div className="privacy-pg__warning-content">
                                <h3>3. Data Security & Sharing</h3>
                                <p>
                                    DropyHub ensures that your data is stored securely and is not misused. Your information may be shared <strong>only with relevant companies or recruiters</strong> for job placement purposes.
                                </p>
                                <p className="privacy-pg__highlight">
                                    We do not sell or share your data with any unauthorized third parties.
                                </p>
                            </div>
                        </div>

                        <div className="privacy-pg__section">
                            <h3 className="privacy-pg__sub-title">4. User Consent</h3>
                            <p className="privacy-pg__text">
                                By submitting your details, you consent to the use of your information for job-related purposes as described above.
                            </p>
                        </div>

                        <div className="privacy-pg__section">
                            <h3 className="privacy-pg__sub-title">5. Policy Updates</h3>
                            <p className="privacy-pg__text">
                                DropyHub may update this Privacy Policy from time to time. Any changes will be reflected on this page.
                            </p>
                        </div>

                        <div className="privacy-pg__contact glass-card">
                            <h3>Privacy Concerns?</h3>
                            <p>For any privacy-related queries or to request data removal, contact us at:</p>
                            <a href="mailto:contact@dropyhub.com" className="privacy-pg__email-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                contact@dropyhub.com
                            </a>
                        </div>
                    </div>

                    <div className="privacy-pg__footer">
                        <Link to="/" className="btn-outline">Back to Home</Link>
                        <Link to="/apply" className="btn-primary">Apply Now For Free</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPage;
