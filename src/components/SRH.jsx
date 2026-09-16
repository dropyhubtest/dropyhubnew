import React from 'react';
import './SRH.css';

const SRH = () => (
    <section className="srh section" id="srh">
        <div className="container">
            <div className="srh__inner glass-card">
                {/* BG orbs */}
                <div className="srh__orb srh__orb--left" />
                <div className="srh__orb srh__orb--right" />

                <div className="srh__content">
                    <div className="srh__badge-row">
                        <div className="srh__live-dot" />
                        <span className="srh__live-text">TATA IPL 2025 · Official Partnership</span>
                    </div>

                    <h2 className="srh__headline">
                        DropyHub ×<br />
                        <span className="gradient-text">Sunrisers Hyderabad</span>
                    </h2>

                    <p className="srh__desc">
                        DropyHub is proud to be the <strong>Official Partner of Sunrisers Hyderabad</strong> for
                        TATA IPL 2025. This partnership reflects our commitment to performance, teamwork, and winning -
                        values that define both the SRH organization and every delivery partner in our network.
                    </p>

                    <div className="srh__perks">
                        <div className="srh__perk">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Branded merchandise for top partners
                        </div>
                        <div className="srh__perk">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Exclusive SRH match ticket rewards
                        </div>
                        <div className="srh__perk">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            National-level brand visibility
                        </div>
                        <div className="srh__perk">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Partner of the Spirit of the Game
                        </div>
                    </div>

                    <a href="#apply" className="btn-primary">
                        Join the Winning Team
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="srh__visual">
                    <div className="srh__logo-ring">
                        <div className="srh__logo-inner">
                            <img src="/srh_logo.png" alt="Sunrisers Hyderabad" className="srh__dh-logo" />
                        </div>
                        <div className="srh__ring srh__ring--1" />
                        <div className="srh__ring srh__ring--2" />
                    </div>
                    <div className="srh__partnership-tag">
                        🏏 Sunrisers Hyderabad<br />
                        <span>Official Partner 2025</span>
                    </div>
                    <div className="srh__ipl-badge">
                        <div className="srh__ipl-num">TATA IPL</div>
                        <div className="srh__ipl-year">2025</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SRH;
