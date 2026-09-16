import React from 'react';
import './StartaplyBanner.css';

export default function StartaplyBanner() {
    const STARTAPLY_LINKEDIN_URL = 'https://www.linkedin.com/company/startaply';

    return (
        <section className="startaply-section" id="startaply-careers">
            <div className="container">
                <div className="startaply-card">
                    {/* Glowing Accent Orbs */}
                    <div className="startaply-glow-orb startaply-glow-orb--left"></div>
                    <div className="startaply-glow-orb startaply-glow-orb--right"></div>

                    <div className="startaply-card__inner">
                        {/* Top Badges Row */}
                        <div className="startaply-top-row">
                            <div className="startaply-brand-pill">
                                <span className="startaply-brand-icon">🚀</span>
                                <span className="startaply-brand-name">Startaply</span>
                                <span className="startaply-partner-tag">Official Career Partner</span>
                            </div>
                            <div className="startaply-live-badge">
                                <span className="startaply-dot"></span>
                                <span>Hiring Across India • Freshers & Experienced</span>
                            </div>
                        </div>

                        {/* Main Content Layout */}
                        <div className="startaply-main-layout">
                            <div className="startaply-text-content">
                                <h2 className="startaply-heading">
                                    Looking for <span className="gradient-text">IT, Non-IT, Corporate</span> or <span className="highlight-cyan">Fresher Jobs?</span>
                                </h2>
                                <p className="startaply-paragraph">
                                    Explore thousands of verified job openings across <strong>Software Engineering, Product, Sales, Digital Marketing, HR, Finance, and Entry-Level Graduate Roles</strong> on <strong>Startaply</strong> — next-generation career and hiring network (like Naukri & LinkedIn).
                                </p>

                                {/* Category Feature Pills */}
                                <div className="startaply-chips-grid">
                                    <div className="startaply-chip">
                                        <span className="chip-icon">💻</span>
                                        <span>IT & Software Development</span>
                                    </div>
                                    <div className="startaply-chip">
                                        <span className="chip-icon">📊</span>
                                        <span>Non-IT, Sales & Marketing</span>
                                    </div>
                                    <div className="startaply-chip">
                                        <span className="chip-icon">🎓</span>
                                        <span>Graduate & Fresher Openings</span>
                                    </div>
                                    <div className="startaply-chip">
                                        <span className="chip-icon">🏢</span>
                                        <span>Corporate & Management Roles</span>
                                    </div>
                                    <div className="startaply-chip">
                                        <span className="chip-icon">⚡</span>
                                        <span>Direct HR & Recruiter Connect</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Action Box */}
                            <div className="startaply-cta-box">
                                <div className="startaply-cta-box-inner">
                                    <div className="linkedin-brand-icon-wrap">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0077B5">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    </div>
                                    <h3 className="startaply-cta-title">Apply on Startaply</h3>
                                    <p className="startaply-cta-subtitle">Direct hiring pipelines with top startups & enterprises.</p>

                                    <a
                                        href={STARTAPLY_LINKEDIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary startaply-primary-cta"
                                    >
                                        <span>Explore Jobs on LinkedIn</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                    <span className="startaply-footnote">✓ 100% Free Job Applications • Verified Companies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
