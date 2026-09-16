import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about__inner">
                    {/* Left visual */}
                    <div className="about__visual">
                        <div className="about__img-wrap glass-card">
                            <div className="about__icon-grid">
                                {[
                                    { icon: '🏍️', label: 'Delivery' },
                                    { icon: '📦', label: 'Logistics' },
                                    { icon: '💼', label: 'Careers' },
                                    { icon: '💰', label: 'Earnings' },
                                    { icon: '🎓', label: 'Training' },
                                    { icon: '🛡️', label: 'Insurance' },
                                ].map(item => (
                                    <div key={item.label} className="about__icon-item">
                                        <span className="about__emoji">{item.icon}</span>
                                        <span className="about__icon-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="about__center-logo">
                                <img src="/logo.png" alt="DropyHub" />
                            </div>
                        </div>

                        {/* Side Pill */}
                        <div className="about__pill glass-card">
                            <div className="about__pill-dot" />
                            <span>One Platform. Infinite Opportunities.</span>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="about__content">
                        <div className="section-tag">About DropyHub</div>
                        <h2 className="section-title">
                            A One-Stop <span className="gradient-text">Logistics Platform</span><br />
                            Built for You
                        </h2>
                        <div className="divider-glow" />

                        <p className="section-sub" style={{ marginBottom: '24px' }}>
                            DropyHub is revolutionizing the delivery industry by creating a unified ecosystem where delivery
                            executives are empowered - not just employed. We bridge the gap between gig work and professional careers.
                        </p>
                        <p className="section-sub">
                            Founded with the mission to provide stable livelihoods and career pathways, DropyHub connects
                            delivery partners to top companies like Swiggy, Zomato, Amazon, Blinkit &amp; Zepto -
                            all under one powerful platform.
                        </p>

                        <div className="about__tags">
                            {['Swiggy', 'Zomato', 'Amazon', 'Blinkit', 'Zepto', 'Uber', 'Meesho'].map(b => (
                                <span key={b} className="about__tag">{b}</span>
                            ))}
                        </div>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <div>
                                    <div className="about__highlight-title">Trusted & Verified</div>
                                    <div className="about__highlight-desc">Background-checked and insured delivery network</div>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                </div>
                                <div>
                                    <div className="about__highlight-title">Career Advancement</div>
                                    <div className="about__highlight-desc">IT training and software job transition support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
