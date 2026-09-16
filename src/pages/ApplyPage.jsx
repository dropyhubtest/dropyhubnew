import React from 'react';
import PageHero from '../components/PageHero';
import RollingPayoutTicker from '../components/RollingPayoutTicker';
import Apply from '../components/Apply';
import StartaplyBanner from '../components/StartaplyBanner';
import FAQAccordion from '../components/FAQAccordion';

const ApplyPage = () => (
    <>
        <PageHero
            tag="Instant Company Payroll"
            title="Apply For Verified Roles &"
            highlight="Get Paid Daily"
            subtitle="Explore company openings across top delivery & logistics platforms. Complete free Kotak 811 account setup for 24-hour executive verification and automated payroll activation."
            breadcrumb={['Home', 'Company Jobs & Payroll']}
            imageSrc="/apply_hero_blue_edited.png"
            imageLightSrc="/apply_hero_blue_edited.png"
        />
        <RollingPayoutTicker />
        <Apply />
        <StartaplyBanner />
        <FAQAccordion />
    </>
);

export default ApplyPage;
