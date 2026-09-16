import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SRH from '../components/SRH';
import './PartnershipPage.css';

const highlights = [
    { icon: '🏆', title: 'Elite Brand Visibility', desc: 'DropyHub branding appears across all SRH match venues, jerseys, and official digital channels during TATA IPL 2025.' },
    { icon: '🎟️', title: 'Match Ticket Rewards', desc: 'Top-performing delivery partners are rewarded with exclusive SRH match tickets as part of our incentive programme.' },
    { icon: '🧢', title: 'Branded Merchandise', desc: 'Official SRH × DropyHub co-branded merchandise gifted to our star partners and during special campaigns.' },
    { icon: '📡', title: 'National Media Exposure', desc: 'The partnership receives national TV and digital media coverage during the TATA IPL season, elevating the DropyHub brand.' },
    { icon: '🤝', title: 'Community & Spirit', desc: 'We share the SRH spirit of teamwork, performance, and rising above challenges - just like our delivery partners.' },
    { icon: '🥇', title: 'Partner Recognition', desc: 'Monthly "Star Partner" awards have a special SRH edition during TATA IPL season with exclusive prizes.' },
];

const PartnershipPage = () => (
    <>
        <PageHero
            tag="TATA IPL 2025 Partnership"
            title="DropyHub ×"
            highlight="Sunrisers Hyderabad"
            subtitle="We are proud to be the Official Partner of Sunrisers Hyderabad for TATA IPL 2025 - a partnership built on performance, excellence, and the winning spirit."
            breadcrumb={['Home', 'Partnership']}
            imageSrc="/partnership_hero_new.webp"
            imageLightSrc="/partnership_hero_new.webp"
            mobileImageSrc="/partnership_hero_mobile.webp"
        />

        {/* Orange partnership banner */}
        <div className="partner-banner">
            <div className="partner-banner__orb" />
            <div className="container partner-banner__inner">
                <div className="partner-banner__left">
                    <div className="partner-banner__live">
                        <div className="partner-banner__dot" />
                        <span>LIVE PARTNERSHIP · TATA IPL 2025</span>
                    </div>
                    <div className="partner-banner__text">
                        <strong>DropyHub</strong> × <strong style={{ color: '#FF6B00' }}>Sunrisers Hyderabad</strong>
                    </div>
                    <div className="partner-banner__sub">Delivering excellence. On and off the field.</div>
                </div>
                <div className="partner-banner__logo-wrap">
                    <img src="/logo.png" alt="DropyHub" className="partner-banner__dh-logo" />
                    <div className="partner-banner__times">×</div>
                    <img src="/srh_logo.png" alt="Sunrisers Hyderabad" className="partner-banner__srh-logo" />
                </div>
            </div>
        </div>

        <SRH />

        {/* Partnership Highlights */}
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <div className="section-tag">Partnership Benefits</div>
                    <h2 className="section-title">What This Partnership <span className="gradient-text">Means for You</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                    <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                        As a DropyHub partner, the SRH collaboration directly translates into unique rewards and recognition for you.
                    </p>
                </div>
                <div className="partner-highlights__grid">
                    {highlights.map(h => (
                        <div key={h.title} className="partner-highlights__card glass-card">
                            <div className="partner-highlights__emoji">{h.icon}</div>
                            <h3 className="partner-highlights__title">{h.title}</h3>
                            <p className="partner-highlights__desc">{h.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Sponsors Section */}
        <section className="section section-alt" style={{ padding: '80px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-tag">Network Ecosystem</div>
                <h2 className="section-title">Official Sponsors & <span className="gradient-text">Partners</span></h2>
                <div className="divider-glow" style={{ margin: '16px auto 40px' }} />
                
                <div className="partner-images__wrap">
                    <div className="partner-images__all glass-card">
                        <img src="/Gemini_Generated_Image_ryjsn7ryjsn7ryjs.png" alt="All Sponsors" className="partner-img" />
                    </div>
                    <div className="partner-images__grid glass-card" style={{ marginTop: '24px' }}>
                        <img src="/WhatsApp Image 2026-03-16 at 1.30.01 PM (1).jpeg" alt="Our Partners Grid" className="partner-img" />
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="section section-alt">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Join the <span className="gradient-text">Winning Team</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                    Be part of a platform associated with India's most exciting cricket franchise. Register as a delivery partner today - completely free.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/apply" className="btn-primary">
                        Apply Now - ₹0 Fee
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/benefits" className="btn-outline">View Benefits</Link>
                </div>
            </div>
        </section>
    </>
);

export default PartnershipPage;
