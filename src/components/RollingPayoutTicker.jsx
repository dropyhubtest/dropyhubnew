import React, { useState, useEffect } from 'react';
import './RollingPayoutTicker.css';

const LIVE_PAYOUTS = [
    { name: 'Ramesh K.', partner: 'Zepto Delivery', amount: '₹1,420', time: 'Just now', city: 'Hyderabad', bank: 'Kotak 811' },
    { name: 'Rahul V.', partner: 'Pronto Logistics', amount: '₹1,850', time: '2 mins ago', city: 'Bangalore', bank: 'Kotak 811' },
    { name: 'Suresh M.', partner: 'Porter Cargo', amount: '₹2,340', time: '4 mins ago', city: 'Mumbai', bank: 'Kotak 811' },
    { name: 'Karan D.', partner: 'Zomato Fleet', amount: '₹1,580', time: '5 mins ago', city: 'Delhi NCR', bank: 'Kotak 811' },
    { name: 'Vikram P.', partner: 'Blinkit QuickStore', amount: '₹1,690', time: '7 mins ago', city: 'Pune', bank: 'Kotak 811' },
    { name: 'Mohd. Imran', partner: 'Swiggy Instamart', amount: '₹1,480', time: '9 mins ago', city: 'Chennai', bank: 'Kotak 811' },
    { name: 'Anil Kumar', partner: 'Amazon Flex', amount: '₹1,920', time: '11 mins ago', city: 'Kolkata', bank: 'Kotak 811' },
    { name: 'Pooja S.', partner: 'Dark Store Picker', amount: '₹1,350', time: '13 mins ago', city: 'Hyderabad', bank: 'Kotak 811' },
];

const ROLES_DATA = [
    {
        id: 'delivery',
        title: '2-Wheeler Delivery',
        categoryTag: 'Bike & Scooter',
        subtitle: 'Pronto, Zepto, Zomato, Swiggy, Blinkit',
        baseDaily: 1150,
        dailyRange: '₹900 - ₹1,650',
        weeklyRange: '₹6,300 - ₹11,550',
        monthlyRange: '₹27,000 - ₹49,500',
        payoutFrequency: 'Daily / Rolling Weekly',
        badge: 'High Demand',
        icon: '🛵'
    },
    {
        id: 'cargo',
        title: '3W & Cargo Logistics',
        categoryTag: 'Mini-Truck / Auto',
        subtitle: 'Porter, Pronto Cargo, Tata Ace Logistics',
        baseDaily: 1850,
        dailyRange: '₹1,500 - ₹2,600',
        weeklyRange: '₹10,500 - ₹18,200',
        monthlyRange: '₹45,000 - ₹78,000',
        payoutFrequency: 'Daily Direct to Kotak',
        badge: 'Top Earning',
        icon: '🚚'
    },
    {
        id: 'store',
        title: 'Dark Store Associate',
        categoryTag: 'Quick Commerce Hub',
        subtitle: 'Zepto Hub, Blinkit Darkstore, Instamart',
        baseDaily: 1050,
        dailyRange: '₹850 - ₹1,400',
        weeklyRange: '₹5,950 - ₹9,800',
        monthlyRange: '₹25,500 - ₹42,000',
        payoutFrequency: 'Rolling Weekly + Shift Bonus',
        badge: 'Fixed Shifts',
        icon: '🏪'
    },
    {
        id: 'warehouse',
        title: 'Warehouse Operations',
        categoryTag: 'Fulfillment Hub',
        subtitle: 'Amazon, Flipkart, E-commerce Hubs',
        baseDaily: 1250,
        dailyRange: '₹1,000 - ₹1,750',
        weeklyRange: '₹7,000 - ₹12,250',
        monthlyRange: '₹30,000 - ₹52,500',
        payoutFrequency: 'Rolling Weekly + OT Incentive',
        badge: 'Guaranteed Hours',
        icon: '📦'
    }
];

export default function RollingPayoutTicker({ onApplyClick, variant = 'full' }) {
    const [selectedRole, setSelectedRole] = useState(ROLES_DATA[0]);
    const [tickerIndex, setTickerIndex] = useState(0);

    // Rotate ticker items periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setTickerIndex(prev => (prev + 1) % LIVE_PAYOUTS.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    const activePayout = LIVE_PAYOUTS[tickerIndex];

    const handleApply = () => {
        if (onApplyClick) {
            onApplyClick(selectedRole);
            return;
        }
        const el = document.getElementById('job-listings') || document.getElementById('apply');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/apply';
        }
    };

    return (
        <section className={`rolling-payroll-section ${variant === 'compact' ? 'rolling-payroll--compact' : ''}`}>
            {/* Live Ticker Bar */}
            <div className="rolling-ticker-bar">
                <div className="container rolling-ticker-bar__inner">
                    <div className="rolling-ticker-badge">
                        <span className="live-dot"></span>
                        <span className="live-text">LIVE PAYROLL FEED</span>
                    </div>

                    <div className="rolling-ticker-stream">
                        <div className="rolling-ticker-item active">
                            <span className="payout-name">{activePayout.name}</span>
                            <span className="payout-partner">({activePayout.partner})</span>
                            <span className="payout-tag">received</span>
                            <span className="payout-amount">{activePayout.amount}</span>
                            <span className="payout-bank">via {activePayout.bank} Direct Deposit</span>
                            <span className="payout-meta">• {activePayout.city} ({activePayout.time})</span>
                        </div>
                    </div>

                    <div className="rolling-ticker-trust">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>100% Automated Kotak Disbursements</span>
                    </div>
                </div>
            </div>

            {/* Earnings Visualizer & Engine */}
            <div className="container">
                <div className="rolling-calculator-card glass-card">
                    <div className="rolling-calculator-header">
                        <div className="payroll-tag">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>DropyHub Dynamic Rolling Payroll Engine</span>
                        </div>
                        <h2 className="payroll-title">
                            Work Today. Get Rolling Payouts <span className="gradient-text">Directly Into Kotak.</span>
                        </h2>
                        <p className="payroll-desc">
                            No 30-day waiting. DropyHub company partners enjoy daily rolling earnings & weekly settlements credited directly into a zero-balance Kotak Salary Account.
                        </p>
                    </div>

                    {/* Role Selector Pills */}
                    <div className="rolling-roles-grid">
                        {ROLES_DATA.map(role => (
                            <button
                                key={role.id}
                                type="button"
                                className={`role-pill-btn ${selectedRole.id === role.id ? 'active' : ''}`}
                                onClick={() => setSelectedRole(role)}
                            >
                                <div className="role-pill-icon">{role.icon}</div>
                                <div className="role-pill-content">
                                    <div className="role-pill-top-row">
                                        <span className="role-pill-category">{role.categoryTag}</span>
                                        {role.badge && <span className="role-pill-badge">{role.badge}</span>}
                                    </div>
                                    <strong className="role-pill-title">{role.title}</strong>
                                    <span className="role-pill-sub">{role.subtitle}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Earnings Visualizer */}
                    <div className="rolling-display-grid">
                        <div className="payout-stat-card primary-stat">
                            <div className="stat-label">
                                <span>Estimated Daily Rolling Payout</span>
                                <span className="stat-pill">Unlocked on Kotak KYC</span>
                            </div>
                            <div className="stat-value gradient-text">{selectedRole.dailyRange}</div>
                            <div className="stat-footer">
                                <span>⚡ Transferred every 24 hours</span>
                                <strong>₹0 Transfer Fees</strong>
                            </div>
                        </div>

                        <div className="payout-stat-card">
                            <div className="stat-label">
                                <span>Projected Weekly Rolling Total</span>
                                <span className="stat-icon">📅</span>
                            </div>
                            <div className="stat-value">{selectedRole.weeklyRange}</div>
                            <div className="stat-footer">
                                <span>Direct Deposit Cycle: Every Monday / Daily</span>
                            </div>
                        </div>

                        <div className="payout-stat-card">
                            <div className="stat-label">
                                <span>Potential Monthly Take-Home</span>
                                <span className="stat-icon">💰</span>
                            </div>
                            <div className="stat-value">{selectedRole.monthlyRange}</div>
                            <div className="stat-footer">
                                <span>Includes incentives + fuel allowance</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature Highlights Strip */}
                    <div className="payroll-perks-row">
                        <div className="perk-item">
                            <div className="perk-icon">⚡</div>
                            <div className="perk-text">
                                <strong>Rolling Payouts</strong>
                                <span>Daily or weekly automatic bank credits</span>
                            </div>
                        </div>
                        <div className="perk-item">
                            <div className="perk-icon">🏦</div>
                            <div className="perk-text">
                                <strong>Kotak 811 Mandatory Link</strong>
                                <span>Zero-balance account for instant salary routing</span>
                            </div>
                        </div>
                        <div className="perk-item">
                            <div className="perk-icon">💳</div>
                            <div className="perk-text">
                                <strong>Instant Fuel & Card Access</strong>
                                <span>Virtual debit card active in 5 minutes</span>
                            </div>
                        </div>
                        <div className="perk-item">
                            <div className="perk-icon">🛡️</div>
                            <div className="perk-text">
                                <strong>₹0 Onboarding Fee</strong>
                                <span>100% free registration & zero hidden charges</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Bar */}
                    <div className="rolling-cta-bar">
                        <div className="rolling-cta-info">
                            <strong>Ready to start earning with {selectedRole.title}?</strong>
                            <span>Apply for verified roles in 60 seconds and link your Kotak salary account.</span>
                        </div>
                        <button type="button" className="btn-primary rolling-cta-btn" onClick={handleApply}>
                            <span>View Openings & Apply</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
