import React from 'react';
import './NewsTicker.css';

const messages = [
    { icon: '₹0', text: 'Zero Registration Fee — Join DropyHub Completely Free!' },
    { icon: '🏏', text: 'Official Partner of Sunrisers Hyderabad · TATA IPL 2025' },
    { icon: '💰', text: 'Earn ₹25,000 – ₹50,000+ Per Month as a Delivery Partner' },
    { icon: '⚡', text: 'Zero Registration Fee — No Hidden Charges. Ever.' },
    { icon: '🛵', text: 'Free EV Bike Rentals, Loans & Insurance for All Partners' },
    { icon: '🎁', text: 'Weekly Bonuses, Rewards & Career Growth Opportunities' },
    { icon: '🔒', text: 'Zero Registration Fee — Start Earning from Day One!' },
    { icon: '🌟', text: 'Work with Swiggy, Zomato, Blinkit & More — All in One Platform' },
];

const NewsTicker = () => {
    return (
        <div className="news-ticker" aria-label="Latest updates from DropyHub">
            <div className="news-ticker__label">
                <span className="news-ticker__dot" />
                LIVE
            </div>
            <div className="news-ticker__track-wrap">
                <div className="news-ticker__track">
                    {[...messages, ...messages].map((msg, i) => (
                        <span key={i} className="news-ticker__item">
                            <span className="news-ticker__icon">{msg.icon}</span>
                            {msg.text}
                            <span className="news-ticker__sep">◆</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
