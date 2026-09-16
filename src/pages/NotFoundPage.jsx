import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
    <div className="nf-page">
        <div className="nf-page__orb nf-page__orb--left" />
        <div className="nf-page__orb nf-page__orb--right" />
        <div className="container nf-page__inner">
            <div className="nf-page__num">404</div>
            <h1 className="nf-page__title">Page <span className="gradient-text">Not Found</span></h1>
            <p className="nf-page__desc">Looks like this delivery route doesn't exist. Let us take you back on track.</p>
            <Link to="/" className="btn-primary">
                Back to Home
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
        </div>
    </div>
);

export default NotFoundPage;
