import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';

const BenefitsPage = () => (
    <>
        <PageHero
            tag="Partner Benefits"
            title="Grow With Us,"
            highlight="Earn With Pride."
            subtitle="We treat our delivery executives as true partners, offering the industry's best benefits, flexibility, and financial security."
            breadcrumb={['Home', 'Benefits']}
            imageSrc="/benefits-banner.webp"
            imageLightSrc="/benefits-banner.webp"
        />
        <Benefits />
        <Testimonials />

        {/* CTA */}
        <section className="section section-alt">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Unlock All Benefits - <span className="gradient-text">Join Free Today</span></h2>
                <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                    Every benefit listed is available from day one. Zero registration fee, zero waiting period.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/apply" className="btn-primary">
                        Apply Now - Free
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link to="/services" className="btn-outline">View Services</Link>
                </div>
            </div>
        </section>
    </>
);

export default BenefitsPage;
