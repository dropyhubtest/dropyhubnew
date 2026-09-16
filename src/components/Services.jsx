import React from 'react';
import './Services.css';

const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
        title: 'Financial Loans',
        tag: 'Up to ₹10 Lakh',
        desc: 'Emergency or growth loans for personal needs, vehicle purchase, or operational requirements - without complex paperwork.',
        highlight: 'Instant Approval',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Zero Registration Fee',
        tag: '₹0 to Join',
        desc: 'Completely free onboarding. No hidden charges, no deposits, no documentation fees. Just register and start earning.',
        highlight: 'Always Free',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
        title: 'Vehicle Rental',
        tag: '2W & 3W Bikes',
        desc: 'Affordable daily or monthly 2-wheeler and 3-wheeler rentals. Full maintenance support included with every vehicle.',
        highlight: 'Maintained Vehicles',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            </svg>
        ),
        title: 'Career Development',
        tag: 'IT Training',
        desc: 'Transition from delivery to IT with certified training programs. We invest in your future, not just your present.',
        highlight: 'Software Job Path',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        title: 'Weekly Bonuses',
        tag: 'Performance Pay',
        desc: 'Incentive-based bonus structure. The more you deliver, the more you earn - transparent and guaranteed.',
        highlight: 'Paid Every Week',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
            </svg>
        ),
        title: 'BookMyVouchers',
        tag: 'Exclusive Perks',
        desc: 'Special purchasing vouchers and discount coupons redeemable at partner brands - adding real value beyond salary.',
        highlight: 'Exclusive Access',
    },
];

const Services = () => (
    <section className="services section section-alt" id="services">
        <div className="container">
            <div className="services__header">
                <div className="section-tag">Our Services</div>
                <h2 className="section-title">
                    Everything You Need to <span className="gradient-text">Succeed</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center', maxWidth: '720px' }}>
                    DropyHub provides end-to-end professional support — from your very first day on the road to the peak of your career. Every service below is available to all registered DropyHub partners at <strong>zero registration cost</strong>.
                </p>
            </div>


            <div className="services__grid">
                {services.map((s, i) => (
                    <div key={s.title} className="services__card glass-card">
                        <div className="services__icon">{s.icon}</div>
                        <div className="services__tag">{s.tag}</div>
                        <h3 className="services__title">{s.title}</h3>
                        <p className="services__desc">{s.desc}</p>
                        <div className="services__highlight">
                            <span className="services__dot" />
                            {s.highlight}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
