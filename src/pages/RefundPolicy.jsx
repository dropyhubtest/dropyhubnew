import React from 'react';
import { Link } from 'react-router-dom';
import './RefundPolicy.css';

const RefundPolicy = () => {
    return (
        <section className="refund-pg section">
                <div className="container">
                    <div className="refund-pg__content glass-card">
                        <div className="refund-pg__header">
                            <div className="section-tag">Transparency First</div>
                            <h2 className="section-title">A Simple, <span className="gradient-text">No-Fuss Approach</span></h2>
                            <div className="divider-glow" />
                        </div>

                        <div className="refund-pg__body">
                            <p className="refund-pg__text">
                                DropyHub follows a transparent and user-friendly approach in its services. We believe in building trust through clarity and honesty.
                            </p>

                            <div className="refund-pg__info-card">
                                <div className="refund-pg__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                                <div className="refund-pg__info-text">
                                    <h3>Zero Registration Fees</h3>
                                    <p>
                                        Currently, DropyHub <strong>does not charge any registration fee</strong> for applying to job
                                        opportunities across delivery, logistics, and warehouse-based platforms such as
                                        Swiggy, Zepto, Blinkit, Rapido, Amazon, Flipkart, and others.
                                    </p>
                                </div>
                            </div>

                            <div className="refund-pg__section">
                                <h3 className="refund-pg__sub-title">Applicability</h3>
                                <p className="refund-pg__text">
                                    Since no payment is collected from users during the application or onboarding process, the <strong>refund policy is not applicable at this stage</strong>.
                                </p>
                            </div>

                            <div className="refund-pg__warning glass-card">
                                <div className="refund-pg__warning-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                </div>
                                <div className="refund-pg__warning-content">
                                    <h3>Important Warning</h3>
                                    <p>
                                        Users are strongly advised <strong>not to make any payments</strong> to unauthorized
                                        individuals claiming to represent DropyHub. We are <strong>not responsible</strong> for any
                                        such external transactions. Genuine DropyHub communications will never ask for payment for job applications.
                                    </p>
                                </div>
                            </div>

                            <div className="refund-pg__section">
                                <h3 className="refund-pg__sub-title">Future Updates</h3>
                                <p className="refund-pg__text">
                                    If any paid services are introduced in the future, the refund terms will be
                                    clearly defined, updated on this page, and communicated to all our users accordingly.
                                </p>
                            </div>

                            <div className="refund-pg__contact glass-card">
                                <h3>Questions or Concerns?</h3>
                                <p>If you have any questions regarding our policies, please reach out to us:</p>
                                <a href="mailto:contact@dropyhub.com" className="refund-pg__email-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    contact@dropyhub.com
                                </a>
                            </div>
                        </div>

                        <div className="refund-pg__footer">
                            <Link to="/" className="btn-outline">Back to Home</Link>
                            <Link to="/apply" className="btn-primary">Apply Now For Free</Link>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default RefundPolicy;
