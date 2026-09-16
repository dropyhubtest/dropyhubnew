import React from 'react';
import PageHero from '../components/PageHero';
import RollingPayoutTicker from '../components/RollingPayoutTicker';
import Apply from '../components/Apply';
import FAQAccordion from '../components/FAQAccordion';

const ApplyPage = () => (
    <>
        <PageHero
            tag="Instant Rolling Payroll"
            title="Apply For Gig Roles &"
            highlight="Get Paid Daily"
            subtitle="Register for leading gig partners (Pronto, Zepto, Zomato, Porter, Blinkit) in 2 minutes. Free Kotak Salary Account link guarantees zero-fee daily and weekly rolling payouts."
            breadcrumb={['Home', 'Apply & Rolling Payroll']}
            imageSrc="/apply_hero_blue_edited.png"
            imageLightSrc="/apply_hero_blue_edited.png"
        />
        <RollingPayoutTicker />
        <Apply />
        <FAQAccordion />
    </>
);

export default ApplyPage;
