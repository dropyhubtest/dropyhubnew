import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <section className="tos-pg section">
            <div className="container">
                <div className="tos-pg__content glass-card">
                    <div className="tos-pg__header">
                        <div className="section-tag">Legal Agreement</div>
                        <h2 className="section-title">Terms of <span className="gradient-text">Service</span></h2>
                        <div className="divider-glow" />
                    </div>

                    <div className="tos-pg__body">
                        <div className="tos-pg__intro">
                            <p className="tos-pg__text tos-pg__text--large">
                                Welcome to DropyHub. By accessing and using our website, you agree to the following terms and conditions.
                            </p>
                        </div>

                        <div className="tos-pg__section">
                            <h3 className="tos-pg__sub-title">1. Our Role & Services</h3>
                            <p className="tos-pg__text">
                                DropyHub acts as a platform that connects job seekers with opportunities available across various delivery, logistics, and warehouse-based companies, including but not limited to Swiggy, Zepto, Blinkit, Rapido, Amazon, Flipkart, and similar service providers.
                            </p>
                        </div>

                        <div className="tos-pg__info-card">
                            <div className="tos-pg__info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                            </div>
                            <div className="tos-pg__info-text">
                                <h3>Direct Employment Disclaimer</h3>
                                <p>
                                    DropyHub does not directly employ candidates for these roles. Final selection, onboarding, and work conditions are determined by the respective companies.
                                </p>
                            </div>
                        </div>

                        <div className="tos-pg__section">
                            <h3 className="tos-pg__sub-title">2. User Responsibilities</h3>
                            <p className="tos-pg__text">
                                Users must provide accurate and genuine information while applying. Providing false or misleading information may result in rejection or restriction from using the platform.
                            </p>
                        </div>

                        <div className="tos-pg__warning glass-card">
                            <div className="tos-pg__warning-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                            </div>
                            <div className="tos-pg__warning-content">
                                <h3>3. Limitation of Responsibility</h3>
                                <p>DropyHub is not responsible for:</p>
                                <ul className="tos-pg__list">
                                    <li>Hiring decisions made by companies</li>
                                    <li>Availability of job roles</li>
                                    <li>Any disputes between candidates and companies</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tos-pg__section">
                            <h3 className="tos-pg__sub-title">4. Intellectual Property</h3>
                            <p className="tos-pg__text">
                                All website content, including design, branding, and text, belongs to DropyHub and must not be copied or used without permission.
                            </p>
                        </div>

                        <div className="tos-pg__section">
                            <h3 className="tos-pg__sub-title">5. Right to Modify</h3>
                            <p className="tos-pg__text">
                                We reserve the right to modify these terms at any time. Continued use of the website indicates acceptance of updated terms.
                            </p>
                        </div>

                        <div className="tos-pg__contact glass-card">
                            <h3>Questions or Feedback?</h3>
                            <p>For any queries regarding these terms, please reach out to us:</p>
                            <a href="mailto:contact@dropyhub.com" className="tos-pg__email-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                contact@dropyhub.com
                            </a>
                        </div>
                    </div>

                    <div className="tos-pg__footer">
                        <Link to="/" className="btn-outline">Back to Home</Link>
                        <Link to="/apply" className="btn-primary">Apply Now For Free</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
