import React from 'react';
import './Benefits.css';

const benefits = [
    { icon: '💵', title: 'Competitive Salary', desc: 'Industry-benchmark base pay with performance-linked top-ups. Our partners earn ₹18,000–₹32,000/month on average, with top earners crossing ₹45,000 during peak seasons.' },
    { icon: '🏆', title: 'Monthly & Annual Awards', desc: 'Recognition-based awards every month and year for top-performing partners. Winners receive cash prizes, vouchers, trophies, and during TATA IPL season — exclusive SRH match tickets.' },
    { icon: '🛡️', title: 'Full Insurance Coverage', desc: 'Comprehensive accidental insurance from day one at zero extra cost. Covers medical treatment, temporary disability, and vehicle damage. Plus 24/7 SOS emergency helpline through our app.' },
    { icon: '🎓', title: 'Free IT Skill Training', desc: 'Certified courses in software, data entry, IT operations, and customer support — completely free for all active partners. A genuine career bridge from delivery executive to tech professional.' },
    { icon: '⛑️', title: 'Safety Gear & Uniform', desc: 'Professional DropyHub uniform, branded helmet, reflective jacket, and complete safety equipment provided and maintained. Look professional, stay safe, at zero cost to you.' },
    { icon: '📞', title: '24/7 Partner Support', desc: 'Dedicated helpdesk available around the clock for queries, grievances, or emergencies. Multilingual support in Telugu, Hindi, Tamil, and English. Average response time under 5 minutes.' },
    { icon: '🛵', title: 'Vehicle Rental Programme', desc: 'Affordable 2-wheeler and 3-wheeler rentals with full maintenance, insurance, and roadside assistance included. No vehicle ownership needed — just show up, ride, and earn.' },
    { icon: '💳', title: 'Financial Loans up to ₹10L', desc: 'Quick-disbursement loans for personal, medical, vehicle, or business needs. Partnered with licensed NBFCs for fast approval without complex paperwork. Exclusively for DropyHub partners.' },
    { icon: '🎟️', title: 'BookMyShow Vouchers', desc: 'Exclusive discount vouchers and coupons redeemable at partner brands including BookMyShow, Amazon, and more. Special perks that go beyond your monthly salary.' },
    { icon: '🌱', title: 'Refer & Earn Programme', desc: 'Invite friends to join DropyHub and earn a cash bonus for every successful referral who completes their first month. Unlimited referrals, unlimited earning potential.' },
    { icon: '🏠', title: 'Hostel Accommodation', desc: 'Budget-friendly, safe hostel accommodations available for partners who relocate for work. We make sure you have a comfortable place to rest after every delivery shift.' },
    { icon: '📈', title: 'Career Growth Pathway', desc: 'Merit-based promotion tracks from delivery executive to team lead, city coordinator, and operations manager. DropyHub grows with you — not just around you.' },
];

const Benefits = () => (
    <section className="benefits section section-alt" id="benefits">
        <div className="container">
            <div className="benefits__header">
                <div className="section-tag">Partner Benefits</div>
                <h2 className="section-title">
                    Built for Your <span className="gradient-text">Well-being & Growth</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: '700px' }}>
                    DropyHub is not just a delivery platform — it is a complete life and career support system for every delivery executive who joins our family.
                </p>
            </div>

            <div className="benefits__grid">
                {benefits.map(b => (
                    <div key={b.title} className="benefits__card">
                        <div className="benefits__emoji">{b.icon}</div>
                        <h3 className="benefits__title">{b.title}</h3>
                        <p className="benefits__desc">{b.desc}</p>
                    </div>
                ))}
            </div>

            {/* Salary Banner */}
            <div className="benefits__banner glass-card">
                <div className="benefits__banner-orb" />
                <div className="benefits__banner-content">
                    <div className="benefits__banner-label">Average Monthly Earnings</div>
                    <div className="benefits__banner-amount">₹18,000 – ₹32,000</div>
                    <div className="benefits__banner-note">Base salary + weekly bonuses + performance incentives + referral rewards</div>
                </div>
                <div className="benefits__banner-stats">
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹500+</div>
                        <div className="benefits__banner-stat-label">Weekly Bonus</div>
                    </div>
                    <div className="benefits__banner-divider" />
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹10L</div>
                        <div className="benefits__banner-stat-label">Max Loan</div>
                    </div>
                    <div className="benefits__banner-divider" />
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">₹0</div>
                        <div className="benefits__banner-stat-label">Joining Fee</div>
                    </div>
                    <div className="benefits__banner-divider" />
                    <div className="benefits__banner-stat">
                        <div className="benefits__banner-stat-num">12+</div>
                        <div className="benefits__banner-stat-label">Cities Active</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Benefits;
