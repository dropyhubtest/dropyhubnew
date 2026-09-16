import React, { useState, useEffect } from 'react';
import './PageHero.css';
import NewsTicker from './NewsTicker';

const PageHero = ({ tag, title, highlight, subtitle, breadcrumb, imageSrc, imageLightSrc, mobileImageSrc, mobileObjectPosition }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Automatically hide text after 5 seconds if there is a background image
        if (!imageSrc) return;
        
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [imageSrc]);

    const bgStyles = mobileObjectPosition ? { '--mobile-obj-pos': mobileObjectPosition } : {};

    return (
        <div className="page-hero-wrapper">
            <div 
                className={`page-hero ${imageSrc ? 'page-hero--has-bg' : ''}`}
                onMouseEnter={() => { if (imageSrc) setIsVisible(true); }}
                onMouseLeave={() => { if (imageSrc) setIsVisible(false); }}
                style={bgStyles}
            >
                {imageSrc && (
                    <div className="page-hero__bg-layer">
                        <picture>
                            {mobileImageSrc && <source media="(max-width: 768px)" srcSet={mobileImageSrc} />}
                            <img src={imageSrc} alt="" className={`page-hero__bg-img ${imageLightSrc ? 'page-hero__bg-img--dark' : ''}`} />
                        </picture>
                        {imageLightSrc && (
                            <picture>
                                {mobileImageSrc && <source media="(max-width: 768px)" srcSet={mobileImageSrc} />}
                                <img src={imageLightSrc} alt="" className="page-hero__bg-img page-hero__bg-img--light" />
                            </picture>
                        )}
                        <div className="page-hero__bg-overlay" />
                    </div>
                )}
                <div className="page-hero__orb page-hero__orb--left" />
                <div className="page-hero__orb page-hero__orb--right" />
                <div className="page-hero__grid" />
                <div className={`container page-hero__inner ${!isVisible ? 'page-hero__inner--hidden' : ''}`}>
                    <div className="page-hero__content fade-up">
                        {breadcrumb && (
                            <div className="page-hero__breadcrumb">
                                {breadcrumb.map((b, i) => (
                                    <span key={i}>
                                        {i > 0 && <span className="breadcrumb-sep"> / </span>}
                                        <span className={i === breadcrumb.length - 1 ? 'breadcrumb-active' : 'breadcrumb-link'}>{b}</span>
                                    </span>
                                ))}
                            </div>
                        )}
                        {tag && <div className="section-tag">{tag}</div>}
                        <h1 className="page-hero__title">
                            {title} {highlight && <span className="gradient-text">{highlight}</span>}
                        </h1>
                        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
                    </div>
                </div>
            </div>

            {/* News ticker always below hero */}
            <NewsTicker />
        </div>
    );
};

export default PageHero;
