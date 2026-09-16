import React from 'react';
import './StartaplyBanner.css';

export default function StartaplyBanner() {
    const STARTAPLY_LINKEDIN_URL = 'https://www.linkedin.com/company/startaply';

    return (
        <section className="startaply-banner-wrap">
            <div className="container">
                <div className="startaply-banner-card glass-card">
                    {/* Left Icon / Badge */}
                    <div className="startaply-brand-col">
                        <div className="startaply-logo-badge">
                            <span className="startaply-icon">🚀</span>
                            <span className="startaply-name">Startaply</span>
                        </div>
                        <span className="startaply-tagline">Career & Hiring Platform</span>
                    </div>

                    {/* Middle Info */}
                    <div className="startaply-info-col">
                        <div className="startaply-pill-row">
                            <span className="pill-item">💻 IT & Software</span>
                            <span className="pill-item">📊 Non-IT & Operations</span>
                            <span className="pill-item">🎓 Fresher Openings</span>
                            <span className="pill-item">🏢 Corporate Roles</span>
                        </div>
                        <h3 className="startaply-title">
                            Looking for IT, Non-IT, Corporate or Fresher Jobs?
                        </h3>
                        <p className="startaply-desc">
                            Discover career opportunities, software engineering, sales, marketing, and entry-level jobs on <strong>Startaply</strong> — next-generation career and hiring portal.
                        </p>
                    </div>

                    {/* Right CTA Button */}
                    <div className="startaply-action-col">
                        <a
                            href={STARTAPLY_LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary startaply-linkedin-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                            <span>Explore Jobs on Startaply</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                        <span className="startaply-sub-note">Follow on LinkedIn for daily job updates</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
