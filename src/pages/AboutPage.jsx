import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './AboutPage.css';

const milestones = [
    { year: '2023', event: 'DropyHub Founded in Hyderabad with a bold vision: to make delivery work dignified, rewarding, and sustainable for every executive in India.' },
    { year: '2023', event: 'Signed first platform partnerships with Swiggy and Zomato. Onboarded our first 200 delivery partners in Hyderabad within 3 months.' },
    { year: '2024', event: 'Expanded to 12+ cities across South India including Bangalore, Chennai, Vijayawada, and Visakhapatnam with 3,000+ active delivery partners.' },
    { year: '2024', event: 'Launched Vehicle Rental Programme and Financial Loan Services — giving partners access to vehicles and capital that was previously out of reach.' },
    { year: '2024', event: 'Reached 5,000+ active partners. Launched IT Training Programme enabling delivery executives to transition into tech careers.' },
    { year: '2025', event: 'Expanded operations into Nellore, Kavali, and Prakasam districts — bringing the DropyHub ecosystem to Tier-2 cities across Andhra Pradesh.' },
    { year: '2026', event: 'Announced Official Partnership with Sunrisers Hyderabad for TATA IPL 2026 — a national recognition of DropyHub\'s brand strength and community reach.' },
    { year: '2026', event: 'Launched Refer & Earn Programme and Partner Leadership Track — creating pathways for top partners to become team leaders and city coordinators.' },
];

const values = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'Integrity First',
        desc: 'Zero hidden fees, zero false promises. What we say is exactly what we do. Every benefit, bonus, and commitment is documented, transparent, and delivered on time.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg>,
        title: 'Partner First Always',
        desc: 'Every decision, product, and policy at DropyHub is built with the delivery executive at the center. We ask ourselves: does this make a partner\'s life better? If yes, we build it.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        title: 'Real Growth',
        desc: 'We invest in your career — from delivery to IT, from rider to team lead. Our training programmes, leadership tracks, and financial tools are designed for upward mobility, not just employment.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Community & Brotherhood',
        desc: 'DropyHub is a family of 5,000+ partners who support and lift each other. From monthly awards to referral bonuses, we celebrate every member\'s success together.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
        title: 'Speed & Reliability',
        desc: 'Onboarding in 48 hours. Bonuses paid every Monday. Support answered in under 5 minutes. We move as fast as our delivery partners — no delays, no excuses.',
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
        title: 'Safety & Trust',
        desc: 'Every partner is covered by comprehensive insurance, backed by 24/7 SOS support, and equipped with certified safety gear. Safety is not a feature — it is a foundation.',
    },
];

const impactStats = [
    { num: '5,000+', label: 'Active Partners', sub: 'Across 12+ cities' },
    { num: '₹18K–₹32K', label: 'Avg Monthly Earnings', sub: 'Per partner per month' },
    { num: '11+', label: 'Platform Partners', sub: 'Swiggy, Zomato, Amazon & more' },
    { num: '48 hrs', label: 'Onboarding Time', sub: 'From signup to delivery' },
    { num: '₹10L', label: 'Max Loan Available', sub: 'Quick disbursal, zero hassle' },
    { num: '₹0', label: 'Registration Fee', sub: 'Always free, always will be' },
];

const AboutPage = () => (
    <>
        <PageHero
            tag="About DropyHub"
            title="Logistics"
            highlight="Reimagined."
            subtitle="We are building India's most reliable, empowering, and scalable delivery network — where every partner earns more, grows more, and lives better."
            breadcrumb={['Home', 'About Us']}
            imageSrc="/about_hero_new.webp"
            imageLightSrc="/about_hero_new.webp"
            mobileObjectPosition="65% top"
        />

        {/* Mission & Vision */}
        <section className="about-pg section">
            <div className="container">
                <div className="about-pg__mv-grid">
                    <div className="about-pg__mv-card glass-card">
                        <div className="about-pg__mv-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        </div>
                        <div className="about-pg__mv-tag">Our Mission</div>
                        <h2 className="about-pg__mv-title">Empower Every<br /><span className="gradient-text">Delivery Executive</span></h2>
                        <p className="about-pg__mv-desc">
                            To provide every delivery partner with the tools, financial support, career development, and human dignity needed to build a stable, prosperous livelihood — not just a job. We believe that the people who keep India's supply chains moving deserve more than minimum wage and zero security.
                        </p>
                    </div>
                    <div className="about-pg__mv-card glass-card">
                        <div className="about-pg__mv-icon" style={{ background: 'rgba(21,101,192,0.12)', borderColor: 'rgba(21,101,192,0.3)', color: 'var(--cyan)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <div className="about-pg__mv-tag" style={{ color: 'var(--cyan)', background: 'rgba(21,101,192,0.1)', borderColor: 'rgba(21,101,192,0.3)' }}>Our Vision</div>
                        <h2 className="about-pg__mv-title">India's Leading<br /><span className="gradient-text">Logistics Network</span></h2>
                        <p className="about-pg__mv-desc">
                            To become India's most trusted and comprehensive platform for delivery professionals — connecting 50,000+ partners to opportunities, companies, and careers across every major city by 2028. A platform where delivery work is a respected, well-compensated, and long-term career choice.
                        </p>
                    </div>
                </div>

                {/* Story */}
                <div className="about-pg__story">
                    <div className="about-pg__story-content">
                        <div className="section-tag">The DropyHub Story</div>
                        <h2 className="section-title">Built from the Ground Up — <span className="gradient-text">For Partners</span></h2>
                        <div className="divider-glow" />
                        <p className="section-sub" style={{ marginBottom: '16px' }}>
                            DropyHub was born from a simple but powerful observation: delivery executives across India were working incredibly hard — often 10–12 hours a day — yet remained underserved. Low pay, high stress, zero career mobility, no financial safety net, and complete dependency on a single platform.
                        </p>
                        <p className="section-sub" style={{ marginBottom: '16px' }}>
                            Our founders, who came from logistics and technology backgrounds, decided to build something different. Not just another delivery aggregator — but a genuine career and life platform for the people who power India's last-mile economy.
                        </p>
                        <p className="section-sub" style={{ marginBottom: '20px' }}>
                            By connecting partners to multiple delivery companies simultaneously, we eliminated single-company dependency. By offering loans, vehicle rentals, insurance, IT training, and 24/7 support — we built a real ecosystem. Today, DropyHub is the partner that partners can count on.
                        </p>

                        <div className="about-pg__partners-container">
                            <p className="about-pg__partners-label">Powering careers with India's top delivery platforms:</p>
                            <div className="about-pg__partner-logos">
                                <div className="about-pg__partner-track">
                                    {[
                                        { name: 'Swiggy', src: '/logos/swiggy1.png' },
                                        { name: 'Swiggy Instamart', src: '/logos/swiggy_instamart.png' },
                                        { name: 'Zomato', src: '/logos/zomato.png' },
                                        { name: 'Blinkit', src: '/logos/blinkit.png' },
                                        { name: 'Zepto', src: '/logos/zepto.png' },
                                        { name: 'Uber', src: '/logos/uber.png' },
                                        { name: 'Flipkart Minutes', src: '/logos/flipkart_minutes.png' },
                                        { name: 'Flipkart', src: '/logos/flipkart.png' },
                                        { name: 'BookMyShow', src: '/logos/bookmyshow.png' },
                                        { name: 'Amazon', src: '/logos/amazon-logo.jpg' },
                                        { name: 'Delivery', src: '/logos/images.jpeg' },
                                        { name: 'Big Basket', src: '/logos/big basket.jpeg' },
                                        { name: 'Rapido', src: '/logos/rapido.jpeg' },
                                        { name: 'Shadowfax', src: '/logos/shadowfax.jpeg' },
                                        // Duplicate for seamless loop
                                        { name: 'Swiggy', src: '/logos/swiggy1.png' },
                                        { name: 'Swiggy Instamart', src: '/logos/swiggy_instamart.png' },
                                        { name: 'Zomato', src: '/logos/zomato.png' },
                                        { name: 'Blinkit', src: '/logos/blinkit.png' },
                                        { name: 'Zepto', src: '/logos/zepto.png' },
                                        { name: 'Uber', src: '/logos/uber.png' },
                                        { name: 'Flipkart Minutes', src: '/logos/flipkart_minutes.png' },
                                        { name: 'Flipkart', src: '/logos/flipkart.png' },
                                        { name: 'BookMyShow', src: '/logos/bookmyshow.png' },
                                        { name: 'Amazon', src: '/logos/amazon-logo.jpg' },
                                        { name: 'Delivery', src: '/logos/images.jpeg' },
                                        { name: 'Big Basket', src: '/logos/big basket.jpeg' },
                                        { name: 'Rapido', src: '/logos/rapido.jpeg' },
                                        { name: 'Shadowfax', src: '/logos/shadowfax.jpeg' },
                                    ].map((b, i) => (
                                        <div key={i} className="about__tag">
                                            <img src={b.src} alt={b.name} className="about__tag-logo" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-pg__timeline">
                        <div className="about-pg__timeline-title">Our Journey</div>
                        {milestones.map((m, i) => (
                            <div key={i} className="about-pg__milestone">
                                <div className="about-pg__milestone-year">{m.year}</div>
                                <div className="about-pg__milestone-dot" />
                                <div className="about-pg__milestone-text">{m.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Impact Stats */}
        <section className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-tag">Our Impact</div>
                    <h2 className="section-title">DropyHub by <span className="gradient-text">The Numbers</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                    <p className="section-sub" style={{ margin: '16px auto 0', maxWidth: '600px' }}>
                        Every number represents a real partner whose life we have helped improve. These are not projections — they are our reality today.
                    </p>
                </div>
                <div className="about-pg__impact-grid">
                    {impactStats.map(stat => (
                        <div key={stat.label} className="about-pg__impact-card glass-card">
                            <div className="about-pg__impact-num">{stat.num}</div>
                            <div className="about-pg__impact-label">{stat.label}</div>
                            <div className="about-pg__impact-sub">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Values */}
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-tag">Core Values</div>
                    <h2 className="section-title">What We <span className="gradient-text">Stand For</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                    <p className="section-sub" style={{ margin: '16px auto 0', maxWidth: '600px' }}>
                        These are not just words on a wall — they are the principles that guide every decision, product, and team at DropyHub.
                    </p>
                </div>
                <div className="about-pg__values-grid">
                    {values.map(v => (
                        <div key={v.title} className="about-pg__value-card glass-card">
                            <div className="about-pg__value-icon">{v.icon}</div>
                            <h3 className="about-pg__value-title">{v.title}</h3>
                            <p className="about-pg__value-desc">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why DropyHub is Different */}
        <section className="section section-alt">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="section-tag">Why We Are Different</div>
                    <h2 className="section-title">Not Just a Platform — <span className="gradient-text">A Complete Ecosystem</span></h2>
                    <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                </div>
                <div className="about-pg__diff-grid">
                    {[
                        { emoji: '🔗', title: 'Multi-Platform Access', desc: 'Work with Swiggy, Zomato, Amazon, Blinkit, Zepto, Flipkart, BookMyShow and more — all through a single DropyHub partnership. No more single-company dependency.' },
                        { emoji: '💰', title: 'Guaranteed Weekly Pay', desc: 'Your performance bonus is credited every Monday — no delay, no excuse. Base salary is paid monthly with full transparency on every rupee you earn.' },
                        { emoji: '🎓', title: 'Free Career Training', desc: 'DropyHub is the only delivery platform in India that offers free IT skill training to transition partners into software and tech roles — at zero cost.' },
                        { emoji: '🏦', title: 'Financial Safety Net', desc: 'Loans up to ₹10 Lakhs for any purpose. No moneylenders, no informal borrowing. Professional, licensed lending through our NBFC partnerships.' },
                        { emoji: '🛵', title: 'Vehicle Without Ownership', desc: 'Start earning on day one even if you do not own a vehicle. Our affordable rental programme handles everything — maintenance, insurance, and repairs.' },
                        { emoji: '🏆', title: 'Recognition & Respect', desc: 'Monthly Star Awards, SRH TATA IPL edition prizes, annual ceremonies, and a leadership career track. At DropyHub, your hard work is always seen and celebrated.' },
                    ].map(item => (
                        <div key={item.title} className="about-pg__diff-card glass-card">
                            <div className="about-pg__diff-emoji">{item.emoji}</div>
                            <h3 className="about-pg__diff-title">{item.title}</h3>
                            <p className="about-pg__diff-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Ready to Be Part of the <span className="gradient-text">DropyHub Family?</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 32px', maxWidth: '600px' }}>
                    Zero registration fee. Real earnings. Comprehensive benefits. A career worth building. Join 5,000+ partners who have already made the smart choice.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/apply" className="btn-primary">
                        Apply Now — It's Free
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/services" className="btn-outline">Explore Services</Link>
                    <Link to="/benefits" className="btn-outline">View Benefits</Link>
                </div>
            </div>
        </section>
    </>
);

export default AboutPage;
