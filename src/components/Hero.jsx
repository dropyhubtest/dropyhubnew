import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import NewsTicker from './NewsTicker';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hero-wrapper">
            <section
                className="hero"
                id="home"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            >
                {/* Background */}
                <div className="hero__bg-layer">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/home_hero_mobile.webp" />
                        <img src="/home_hero_new.webp" alt="DropyHub Dark Hero" className="hero__bg-img hero__bg-img--dark" />
                    </picture>
                    <picture>
                        <source media="(max-width: 768px)" srcSet="/home_hero_mobile.webp" />
                        <img src="/home_hero_new.webp" alt="DropyHub Light Hero" className="hero__bg-img hero__bg-img--light" />
                    </picture>
                    <div className="hero__bg-overlay" />
                    <div className="hero__grid" />
                </div>

                <div className={`container hero__inner ${!isVisible ? 'hero__inner--hidden' : ''}`}>
                    <div className="hero__content fade-up">

                        {/* SRH Badge */}
                        <div className="hero__srh-badge">
                            <div className="srh-badge__dot" />
                            <span>🏏 Official Partner - Sunrisers Hyderabad · TATA IPL 2025</span>
                        </div>

                        <h1 className="hero__headline">
                            India's #1 Platform for<br />
                            <span className="gradient-text">Delivery Partners</span>
                        </h1>

                        <p className="hero__sub">
                            Join <strong>DropyHub</strong> and unlock stable income, career growth, vehicle support,
                            financial loans &amp; more - all with <em>absolutely Zero Registration Fee.</em>
                        </p>

                        {/* Zero Fee Badge */}
                        <div className="hero__zero-badge">
                            <span className="zero-badge__icon">₹0</span>
                            <div>
                                <div className="zero-badge__title">Zero Registration Fee</div>
                                <div className="zero-badge__sub">No hidden charges. Ever.</div>
                            </div>
                        </div>

                        <div className="hero__actions">
                            <Link to="/apply" className="btn-primary">
                                Join as Delivery Partner
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/about" className="btn-outline">
                                Learn More
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`hero__scroll ${!isVisible ? 'hero__scroll--hidden' : ''}`}>
                    <div className="hero__scroll-dot" />
                    <span>Scroll to explore</span>
                </div>
            </section>

            {/* News ticker below hero */}
            <NewsTicker />
        </div>
    );
};

export default Hero;
