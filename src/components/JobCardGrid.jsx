import React, { useState } from 'react';
import { GIG_JOBS, CITIES, CATEGORIES } from '../data/jobsData';
import JobApplicationModal from './JobApplicationModal';
import './JobCardGrid.css';

export default function JobCardGrid({ onJobSelect }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCity, setSelectedCity] = useState('All Cities');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeModalJob, setActiveModalJob] = useState(null);

    // Filter jobs
    const filteredJobs = GIG_JOBS.filter(job => {
        const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
        const matchesCity = selectedCity === 'All Cities' || job.location.toLowerCase().includes(selectedCity.toLowerCase()) || job.location.includes('Pan India');
        const matchesSearch = searchQuery.trim() === '' ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesCity && matchesSearch;
    });

    const handleOpenModal = (job) => {
        if (onJobSelect) onJobSelect(job);
        setActiveModalJob(job);
    };

    const handleCloseModal = () => {
        setActiveModalJob(null);
    };

    return (
        <div className="job-grid-section-wrap" id="job-listings">
            {/* Filter Bar */}
            <div className="job-filter-bar glass-card">
                <div className="job-filter-top">
                    {/* Category Tabs */}
                    <div className="job-category-tabs">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                type="button"
                                className={`cat-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* City Select */}
                    <div className="job-city-select-wrap">
                        <select
                            value={selectedCity}
                            onChange={e => setSelectedCity(e.target.value)}
                            className="job-city-dropdown"
                        >
                            {CITIES.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="job-search-input-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search roles by company (Zepto, Pronto, Zomato, Porter) or job title..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="job-search-input"
                    />
                    {searchQuery && (
                        <button type="button" className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
                    )}
                </div>
            </div>

            {/* Results Count & Kotak Guarantee Notice */}
            <div className="job-results-meta">
                <span className="results-count">Showing <strong>{filteredJobs.length}</strong> active company payroll roles</span>
                <div className="kotak-payroll-badge-sm">
                    <span className="kotak-icon-dot">●</span>
                    <span>All roles feature <strong>Kotak 811 Direct Daily/Weekly Rolling Payroll</strong></span>
                </div>
            </div>

            {/* Jobs Card Grid */}
            <div className="job-cards-grid">
                {filteredJobs.map(job => (
                    <div key={job.id} className="job-card glass-card">
                        <div className="job-card-top">
                            <div className="job-company-row">
                                {job.logo && (
                                    <div className="job-company-logo-wrap">
                                        <img src={job.logo} alt={job.company} className="job-company-logo-img" />
                                    </div>
                                )}
                                <span className="job-company-badge">{job.company}</span>
                                {job.badge && <span className="job-highlight-badge">{job.badge}</span>}
                            </div>
                            <span className="job-type-tag">{job.type}</span>
                        </div>

                        <h3 className="job-card-title">{job.title}</h3>
                        <p className="job-card-location">📍 {job.location}</p>

                        {/* Payout & Kotak Banner Box */}
                        <div className="job-card-payout-box">
                            <div className="payout-row-main">
                                <span className="payout-title-sm">Estimated Rolling Payout</span>
                                <strong className="payout-val gradient-text">{job.dailyPayout}</strong>
                            </div>
                            <div className="payout-monthly-sub">
                                <span>Monthly: {job.monthlyEst}</span>
                                <span className="payout-freq-pill">{job.payoutFrequency}</span>
                            </div>
                        </div>

                        {/* Perks List */}
                        <ul className="job-perks-list">
                            {job.perks.slice(0, 3).map((perk, i) => (
                                <li key={i} className="job-perk-item">
                                    <span className="perk-check">✓</span>
                                    <span>{perk}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Card Footer */}
                        <div className="job-card-footer">
                            <div className="openings-info">
                                <strong style={{ color: '#00E676' }}>{job.openings} Openings</strong>
                                <span>Fast 24-hr Onboarding</span>
                            </div>

                            <button
                                type="button"
                                className="btn-primary job-apply-cta-btn"
                                onClick={() => handleOpenModal(job)}
                            >
                                <span>Apply Now</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredJobs.length === 0 && (
                <div className="no-jobs-found glass-card">
                    <p>No job openings found matching your filter criteria.</p>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => {
                            setSelectedCategory('all');
                            setSelectedCity('All Cities');
                            setSearchQuery('');
                        }}
                    >
                        Reset All Filters
                    </button>
                </div>
            )}

            {/* Application Pop-up Modal */}
            <JobApplicationModal
                job={activeModalJob}
                isOpen={!!activeModalJob}
                onClose={handleCloseModal}
            />
        </div>
    );
}
