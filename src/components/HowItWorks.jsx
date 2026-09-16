import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        num: '01',
        title: 'Register for Free',
        desc: 'Create your profile on DropyHub in under 5 minutes - no fee, no hassle, no documentation burden.',
    },
    {
        num: '02',
        title: 'Choose Your Preference',
        desc: 'Select your preferred delivery company, time slots, vehicle type, and work area - full flexibility.',
    },
    {
        num: '03',
        title: 'Get Onboarded',
        desc: 'Receive your uniform, safety gear, and vehicle. Our team handles all coordination with partner companies.',
    },
    {
        num: '04',
        title: 'Deliver & Earn',
        desc: 'Start delivering and earn a stable salary with weekly bonuses, performance incentives, and monthly awards.',
    },
];

const HowItWorks = () => (
    <section className="how section" id="how-it-works">
        <div className="container">
            <div className="how__header">
                <div className="section-tag">Process</div>
                <h2 className="section-title">
                    How It <span className="gradient-text">Works</span>
                </h2>
                <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                <p className="section-sub" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                    Four simple steps to change your career trajectory - starting today.
                </p>
            </div>

            <div className="how__steps">
                {steps.map((step, i) => (
                    <React.Fragment key={step.num}>
                        <div className="how__step glass-card">
                            <div className="how__num">{step.num}</div>
                            <h3 className="how__step-title">{step.title}</h3>
                            <p className="how__step-desc">{step.desc}</p>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="how__arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* CTA Strip */}
            <div className="how__cta glass-card">
                <div className="how__cta-left">
                    <div className="how__cta-title">Ready to get started?</div>
                    <div className="how__cta-sub">Join thousands of delivery partners earning smarter with DropyHub.</div>
                </div>
                <a href="#apply" className="btn-primary">
                    Start Earning Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
            </div>
        </div>
    </section>
);

export default HowItWorks;
