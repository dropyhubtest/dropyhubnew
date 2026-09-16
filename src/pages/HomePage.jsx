import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import RollingPayoutTicker from '../components/RollingPayoutTicker';
import StartaplyBanner from '../components/StartaplyBanner';
import FAQAccordion from '../components/FAQAccordion';
import Testimonials from '../components/Testimonials';
import './HomePage.css';

const partners = [
    { name: 'Swiggy', src: '/logos/swiggy1.png' },
    { name: 'Swiggy Instamart', src: '/logos/swiggy_instamart.png' },
    { name: 'Zomato', src: '/logos/zomato.png' },
    { name: 'Blinkit', src: '/logos/blinkit.png' },
    { name: 'Zepto', src: '/logos/zepto.png' },
    { name: 'Uber', src: '/logos/uber.png' },
    { name: 'Flipkart Minutes', src: '/logos/flipkart_minutes.png' },
    { name: 'Flipkart', src: '/logos/flipkart.png' },
    { name: 'BookMyShow', src: '/logos/bookmyshow.png' },
    { name: 'amazon', src: '/logos/amazon-logo.png' },
    { name: 'delivery', src: '/logos/images.jpeg' },
    { name: 'Big Basket', src: '/logos/big basket.jpeg' },
    { name: 'Rapido', src: '/logos/rapido.jpeg' },
    { name: 'Shadowfax', src: '/logos/shadowfax.jpeg' },
];

const quickStats = [
    {
        num: '5,000+', label: 'Active Partners', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        )
    },
    {
        num: '12+', label: 'Cities Covered', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        )
    },
    {
        num: '11+', label: 'Platform Partners', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
        )
    },
    {
        num: '₹10L', label: 'Max Loan Available', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        )
    },
    {
        num: '48 hrs', label: 'Onboarding Time', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        )
    },
    {
        num: '₹0', label: 'Registration Fee', icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        )
    },
];

const homeSections = [
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Zero Registration Fee',
        desc: 'Start your journey with no financial burden. Completely free to join, always.',
        link: '/services',
        linkLabel: 'View Services',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        title: 'Earn More, Grow More',
        desc: 'Salary + weekly bonuses + monthly awards. We invest in your success.',
        link: '/benefits',
        linkLabel: 'View Benefits',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
        title: 'Vehicle Rental Support',
        desc: 'Affordable 2W & 3W rentals with full maintenance. No ownership stress.',
        link: '/services',
        linkLabel: 'View Services',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
        title: 'SRH Official Partner',
        desc: 'Proud official partner of Sunrisers Hyderabad for TATA IPL 2025 season.',
        link: '/partnership',
        linkLabel: 'View Partnership',
    },
];

const HomePage = () => (
    <>
        {/* Full-height hero */}
        <Hero />

        {/* Stats bar */}
        <div className="home-stats-bar">
            <div className="container home-stats-bar__inner">
                {quickStats.map(s => (
                    <div key={s.label} className="home-stats-bar__item">
                        <div className="home-stats-bar__icon">{s.icon}</div>
                        <div>
                            <div className="home-stats-bar__num">{s.num}</div>
                            <div className="home-stats-bar__label">{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Dynamic Rolling Payroll Engine & Live Feed */}
        <RollingPayoutTicker />

        {/* Quick overview cards */}
        <section className="home-overview section">
            <div className="container">
                <div className="home-overview__header">
                    <div className="section-tag">Why DropyHub</div>
                    <h2 className="section-title">The Smarter Way to <span className="gradient-text">Deliver & Earn</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                </div>
                <div className="home-overview__grid">
                    {homeSections.map(card => (
                        <div key={card.title} className="home-overview__card glass-card">
                            <div className="home-overview__icon">{card.icon}</div>
                            <h3 className="home-overview__title">{card.title}</h3>
                            <p className="home-overview__desc">{card.desc}</p>
                            <Link to={card.link} className="home-overview__link">
                                {card.linkLabel}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why People Choose Us */}
        <section className="home-choose section">
            <div className="container">
                <div className="home-choose__inner">
                    <div className="home-choose__image-col">
                        <img src="/delivery_partner_real.png" alt="Happy DropyHub Delivery Partner" className="home-choose__img" />

                        {/* Overlay floating cards */}
                        <div className="home-choose__float-card home-choose__float-card--top glass-card">
                            <div className="float-card__label">Earnings This Month</div>
                            <div className="float-card__val">₹38,500 <span className="float-card__trend">↑ 14%</span></div>
                        </div>

                        <div className="home-choose__float-card home-choose__float-card--bottom glass-card">
                            <div className="float-card__icon">5k+</div>
                            <div className="float-card__text">
                                <strong>Active Partners</strong>
                                <span>Across India</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-choose__content">
                        <h2 className="section-title">Why People <span className="gradient-text">Choose us?</span></h2>
                        <p className="section-sub" style={{ margin: '12px 0 40px' }}>
                            Trusted by thousands of delivery partners - see what makes us different.
                        </p>

                        <div className="home-choose__list">
                            <div className="home-choose__item glass-card">
                                <div className="home-choose__icon" style={{ color: '#FFB74D', borderColor: 'rgba(255, 183, 77, 0.3)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <div className="home-choose__text">
                                    <h3 className="home-choose__item-title">Affordable EV Rentals & Hostel Options</h3>
                                    <p className="home-choose__item-desc">No bike? No problem. Get affordable EV rentals and access budget-friendly hostel accommodations.</p>
                                </div>
                            </div>

                            <div className="home-choose__item glass-card">
                                <div className="home-choose__icon" style={{ color: '#FF6B00', borderColor: 'rgba(255, 107, 0, 0.3)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <div className="home-choose__text">
                                    <h3 className="home-choose__item-title">Fast Onboarding & Zero Registration Fee</h3>
                                    <p className="home-choose__item-desc">Join in just 24-48 hours with no upfront cost. We make it easy to start earning without delays.</p>
                                </div>
                            </div>

                            <div className="home-choose__item glass-card">
                                <div className="home-choose__icon" style={{ color: '#FFD54F', borderColor: 'rgba(255, 213, 79, 0.3)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                                </div>
                                <div className="home-choose__text">
                                    <h3 className="home-choose__item-title">Weekly Rewards & Career Growth Opportunities</h3>
                                    <p className="home-choose__item-desc">Earn bonuses, get vouchers, and even switch to a tech career with our free training program.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Simple Fast Partnership */}
        <section className="home-steps section section-alt">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Simple, Fast & Effective <span className="gradient-text">Partnership</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 56px' }}>Follow these simple steps to join DropyHub and start earning fast.</p>

                <div className="home-steps__grid">
                    <div className="home-steps__line"></div>

                    <div className="home-steps__item">
                        <div className="home-steps__icon glass-card" style={{ borderColor: 'rgba(30,136,229,0.3)', color: '#1E88E5' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="home-steps__title">Submit Your<br />Requirements</h3>
                        <p className="home-steps__desc">Tell us your fleet needs, timing, and locations.</p>
                    </div>

                    <div className="home-steps__item">
                        <div className="home-steps__icon glass-card" style={{ borderColor: 'rgba(76,175,80,0.3)', color: '#4CAF50' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="home-steps__title">Get Matched<br />with Trained Riders</h3>
                        <p className="home-steps__desc">We assign verified partners within 24-72 hours.</p>
                    </div>

                    <div className="home-steps__item">
                        <div className="home-steps__icon glass-card" style={{ borderColor: 'rgba(171,71,188,0.3)', color: '#AB47BC' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        </div>
                        <h3 className="home-steps__title">Start Delivering<br />Seamlessly</h3>
                        <p className="home-steps__desc">Track performance and scale as needed - no long-term contracts.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* About DropyHub — Company Overview */}
        <section className="home-b2b section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="home-overview__header">
                    <div className="section-tag">About DropyHub</div>
                    <h2 className="section-title">India's Most <span className="gradient-text">Partner-First</span> Delivery Network</h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                </div>
                <p className="section-sub" style={{ margin: '24px auto 16px', maxWidth: '780px', textAlign: 'center' }}>
                    DropyHub is a last-mile delivery staffing and partner ecosystem platform headquartered in Hyderabad, Telangana. Founded in 2023, we connect delivery executives to India's top platforms Swiggy, Zomato, Blinkit, Amazon, Zepto, Flipkart, BookMyShow, Uber, and more through a single, free-to-join partnership.
                </p>
                <p className="section-sub" style={{ margin: '0 auto 40px', maxWidth: '780px', textAlign: 'center' }}>
                    Unlike traditional staffing agencies, DropyHub goes beyond placement. We provide vehicle rentals, financial loans up to ₹10 Lakhs, comprehensive insurance, free IT career training, weekly bonuses, monthly awards, and 24/7 partner support  making us a complete life and career platform for 5,000+ active delivery partners across 12+ cities in India.
                </p>

                <div className="home-b2b__grid">
                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">👨‍✈️</div>
                        <h3 className="home-b2b__title">Skilled &<br />Verified Riders</h3>
                        <p className="home-b2b__desc">Every rider is background verified, professionally trained, uniformed, and equipped with safety gear before their first delivery.</p>
                    </div>

                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">📉</div>
                        <h3 className="home-b2b__title">Low<br />Attrition Rates</h3>
                        <p className="home-b2b__desc">Our reward systems, insurance, loans, and career development programmes keep partners motivated and loyal  giving you a stable workforce.</p>
                    </div>

                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">🗺️</div>
                        <h3 className="home-b2b__title">12+ Cities,<br />Pan-India Reach</h3>
                        <p className="home-b2b__desc">Active in Hyderabad, Bangalore, Chennai, Vijayawada, Nellore, Kavali, Ongole, Visakhapatnam, Guntur, Tirupati, and expanding every quarter.</p>
                    </div>

                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">🤝</div>
                        <h3 className="home-b2b__title">End-to-End<br />Workforce Management</h3>
                        <p className="home-b2b__desc">From recruitment and onboarding to daily performance tracking and grievance resolution  DropyHub manages everything so you can focus on your business.</p>
                    </div>

                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">⚡</div>
                        <h3 className="home-b2b__title">48-Hour<br />Deployment</h3>
                        <p className="home-b2b__desc">Need delivery staff urgently? We can onboard and deploy verified riders to your zone within 48 hours  no delays, no bureaucracy.</p>
                    </div>

                    <div className="home-b2b__card glass-card">
                        <div className="home-b2b__icon">🏆</div>
                        <h3 className="home-b2b__title">SRH Official<br />Partner 2025</h3>
                        <p className="home-b2b__desc">DropyHub is the Official Partner of Sunrisers Hyderabad for TATA IPL 2025  a testament to our national credibility, brand strength, and operational scale.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Partners marquee strip */}
        <section className="home-partners section-alt" style={{ padding: '48px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <p className="home-partners__label">Connecting you with India's top delivery platforms</p>
                <div className="home-partners__logos-wrapper">
                    <div className="home-partners__track">
                        {[...partners, ...partners].map((p, i) => (
                            <div key={i} className="home-partners__item">
                                <img src={p.src} alt={p.name} className="home-partners__logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SRH Teaser CTA */}
        <section className="home-srh-teaser section">
            <div className="container">
                <div className="home-srh-teaser__card glass-card">
                    <div className="home-srh-teaser__orb" />
                    <div className="home-srh-teaser__left">
                        <div className="home-srh-teaser__badge">
                            <div className="srh-badge__dot" style={{ background: '#FF6B00', boxShadow: '0 0 8px #FF6B00' }} />
                            TATA IPL 2025 Official Partnership
                        </div>
                        <h2 className="home-srh-teaser__title">
                            DropyHub × <span className="gradient-text">Sunrisers Hyderabad</span>
                        </h2>
                        <p className="home-srh-teaser__desc">
                            We are the Official Partner of SRH for TATA IPL 2025. This landmark partnership reflects our commitment to performance, excellence, and winning - for our partners and for the game.
                        </p>
                        <Link to="/partnership" className="btn-primary">
                            Explore Partnership
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <div className="home-srh-teaser__right">
                        <div className="home-srh-logo-ring">
                            <div className="home-srh-logo-inner">
                                <img src="/srh_logo.png" alt="Sunrisers Hyderabad" />
                            </div>
                            <div className="home-srh-ring home-srh-ring--1" />
                            <div className="home-srh-ring home-srh-ring--2" />
                        </div>
                        <div className="home-srh-ipl-text">🏏 Sunrisers Hyderabad<br /><span>Official Partner 2025</span></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Innovation & Technology */}
        <section className="home-innovation section section-alt">
            <div className="container">
                <div className="home-innovation__inner">
                    <div className="home-innovation__content">
                        <div className="section-tag">Innovation</div>
                        <h2 className="section-title">Driven by <span className="gradient-text">Next-Gen Tech</span></h2>
                        <p className="section-sub" style={{ margin: '16px 0 32px' }}>
                            We leverage advanced AI and real-time logistics data to optimize every delivery route and maximize partner earnings.
                        </p>

                        <div className="innovation-features">
                            <div className="innovation-feature">
                                <div className="innovation-feature__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                </div>
                                <div className="innovation-feature__text">
                                    <h4>Smart Route Optimization</h4>
                                    <p>AI-powered paths to ensure fastest deliveries with minimal fuel consumption.</p>
                                </div>
                            </div>
                            <div className="innovation-feature">
                                <div className="innovation-feature__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div className="innovation-feature__text">
                                    <h4>Real-Time Earnings Tracker</h4>
                                    <p>Watch your earnings grow in real-time with instant performance analytics.</p>
                                </div>
                            </div>
                            <div className="innovation-feature">
                                <div className="innovation-feature__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <div className="innovation-feature__text">
                                    <h4>Unified Driver App</h4>
                                    <p>One app for all your deliveries across multiple platform giants.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-innovation__visual">
                        <div className="innovation-visual__glow" />
                        <div className="innovation-visual__card">
                            <img src="/app_mockup.webp" alt="DropyHub App Interface" className="innovation-visual__img" />
                            <div className="innovation-visual__float">
                                <div style={{ fontSize: '11px', color: 'var(--cyan)', fontWeight: '700', textTransform: 'uppercase' }}>System Status</div>
                                <div style={{ fontSize: '14px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 10px #4CAF50' }}></span>
                                    Optimizing Routes...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Safety & Support */}
        <section className="home-safety section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="section-tag">Safety First</div>
                <h2 className="section-title">Your Security, <span className="gradient-text">Our Priority</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 56px', maxWidth: '700px' }}>
                    We go above and beyond to ensure every partner feels safe and supported throughout their journey with us.
                </p>

                <div className="home-safety__grid">
                    <div className="safety-card glass-card">
                        <div className="safety-card__icon" style={{ color: '#4CAF50' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Comprehensive Insurance</h3>
                        <p>Total accidental insurance coverage for all active partners from day one.</p>
                    </div>
                    <div className="safety-card glass-card">
                        <div className="safety-card__icon" style={{ color: '#E91E63' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <h3>24/7 SOS Support</h3>
                        <p>Dedicated emergency response team available through our app for any situation.</p>
                    </div>
                    <div className="safety-card glass-card">
                        <div className="safety-card__icon" style={{ color: '#FF9800' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                        </div>
                        <h3>Verified Partners</h3>
                        <p>Stringent background checks for every rider to maintain a trusted ecosystem.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Startaply IT & Non-IT Careers Banner */}
        <StartaplyBanner />

        <Testimonials />

        <FAQAccordion />

        {/* Bottom CTA banner */}
        <section className="home-cta section-alt" style={{ padding: '72px 0' }}>
            <div className="container home-cta__inner">
                <div>
                    <h2 className="section-title">Ready to Start Earning?</h2>
                    <p className="section-sub">Join DropyHub today. Completely free registration. Instant access to top delivery companies.</p>
                </div>
                <div className="home-cta__actions">
                    <Link to="/apply" className="btn-primary">
                        Apply Now - ₹0 Fee
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/about" className="btn-outline">Know More</Link>
                </div>
            </div>
        </section>
    </>
);

export default HomePage;
