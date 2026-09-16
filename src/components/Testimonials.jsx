import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Ramesh Kumar',
        role: 'Delivery Partner · Hyderabad · 2 yrs',
        rating: 5,
        text: 'DropyHub completely changed my life. Before joining, I was stuck with one company earning ₹12,000 a month. Now I work across Swiggy, Zomato, and Blinkit simultaneously and earn ₹28,000+ every month. The weekly bonuses are real and on time. I even got a ₹3 lakh loan to buy a new bike without any paperwork headaches.',
        avatar: 'RK',
    },
    {
        name: 'Suresh Naidu',
        role: 'Senior Partner · Secunderabad · 3 yrs',
        rating: 5,
        text: 'The zero registration fee made it easy to join when I had nothing. I was skeptical at first — but everything they promised was delivered. I now lead a small team of 8 riders under DropyHub. The monthly awards programme is motivating and the support team is available whenever you need them.',
        avatar: 'SN',
    },
    {
        name: 'Vijay Anand',
        role: 'IT Trainee (Ex-Delivery Executive) · Bangalore',
        rating: 5,
        text: 'I never thought I would get into IT while doing delivery. DropyHub\'s free training programme gave me access to data entry and software courses. After 6 months, I transitioned to a junior IT support role. The platform gave me both financial stability and a real career roadmap — something no other company offered.',
        avatar: 'VA',
    },
    {
        name: 'Praveen Reddy',
        role: 'Fleet Partner · Chennai · 1.5 yrs',
        rating: 5,
        text: 'The vehicle rental programme is a lifesaver. I do not own a bike and the daily rental is affordable with full maintenance taken care of. No breakdown stress, no repair costs. I focus solely on delivering and earning. DropyHub truly handles everything so I can focus on what matters.',
        avatar: 'PR',
    },
    {
        name: 'Md. Saleem',
        role: 'Delivery Executive · Nellore · 1 yr',
        rating: 5,
        text: 'I joined DropyHub in Nellore after hearing from a friend. The onboarding was completed in just 2 days — uniform, ID card, everything. I now earn more than I ever did at my previous factory job. The insurance coverage gives my family peace of mind. Best decision I ever made.',
        avatar: 'MS',
    },
    {
        name: 'Lakshmi Prasad',
        role: 'Star Partner · Vijayawada · 2 yrs',
        rating: 5,
        text: 'Won the Monthly Star Award three times this year. The SRH edition award during TATA IPL season was absolutely special — got signed merchandise and match tickets! DropyHub makes you feel valued and celebrated, not just another rider. The community here is like a family.',
        avatar: 'LP',
    },
];

const Stars = ({ count }) => (
    <div className="stars">
        {Array.from({ length: count }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ))}
    </div>
);

const Testimonials = () => (
    <section className="testimonials section" id="testimonials">
        <div className="container">
            <div className="testimonials__header">
                <div className="section-tag">Testimonials</div>
                <h2 className="section-title">
                    Voices of Our <span className="gradient-text">Partners</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                    Real stories from real delivery executives across India who chose DropyHub and transformed their lives.
                </p>
            </div>

            <div className="testimonials__marquee">
                <div className="testimonials__track">
                    {[...testimonials, ...testimonials].map((t, idx) => (
                        <div key={`${t.name}-${idx}`} className="testimonials__card glass-card">
                            <div className="test__quote">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <Stars count={t.rating} />
                            <p className="test__text">{t.text}</p>
                            <div className="test__author">
                                <div className="test__avatar">{t.avatar}</div>
                                <div>
                                    <div className="test__name">{t.name}</div>
                                    <div className="test__role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;
