import React, { useState } from 'react';
import { buildKotakRedirectUrl } from '../utils/attribution';
import './KotakOnboardingCard.css';

export default function KotakOnboardingCard({
    applicantId,
    applicantData,
    onCompleteVerification,
    isLoading = false
}) {
    const [hasClickedLink, setHasClickedLink] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const kotakUrl = buildKotakRedirectUrl(applicantId, applicantData);

    const handleOpenKotak = () => {
        setHasClickedLink(true);
        // Open Kotak affiliate / KYC portal in a new tab with sub_id
        window.open(kotakUrl, '_blank', 'noopener,noreferrer');
    };

    const handleConfirm = () => {
        if (!hasClickedLink && !isConfirmed) {
            // First time click opens link
            handleOpenKotak();
            setIsConfirmed(true);
            return;
        }
        if (onCompleteVerification) {
            onCompleteVerification();
        }
    };

    return (
        <div className="kotak-gate-card glass-card">
            {/* Header Banner */}
            <div className="kotak-gate-header">
                <div className="kotak-brand-badge">
                    <span className="kotak-logo-text">kotak</span>
                    <span className="kotak-811-tag">811</span>
                    <span className="kotak-divider">×</span>
                    <span className="kotak-partner-text">DropyHub Official Payroll Partner</span>
                </div>
                <div className="mandatory-pill">
                    <span className="pulse-icon">●</span>
                    <span>Mandatory For Rolling Payouts</span>
                </div>
            </div>

            <div className="kotak-gate-content">
                <h3 className="kotak-gate-title">
                    Step 2: Link Your <span className="gradient-text">Kotak Salary Disbursement Account</span>
                </h3>
                <p className="kotak-gate-subtitle">
                    To activate daily rolling payouts, weekly salary transfers, and zero-fee deposits from your selected gig platforms, opening a verified Kotak 811 account is strictly required.
                </p>

                {/* Applicant Tracking ID Card */}
                <div className="applicant-id-strip">
                    <div className="applicant-id-label">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Your Assigned Tracking Sub-ID:</span>
                    </div>
                    <div className="applicant-id-code">{applicantId || 'DH-GIG-PENDING'}</div>
                    <span className="applicant-id-badge">Pre-Linked to Lead</span>
                </div>

                {/* Why Kotak is Mandatory Grid */}
                <div className="kotak-benefits-grid">
                    <div className="kotak-benefit-box">
                        <div className="benefit-badge-icon">💳</div>
                        <div>
                            <strong>₹0 Zero Balance Account</strong>
                            <span>No minimum balance penalty ever. 100% free digital account.</span>
                        </div>
                    </div>
                    <div className="kotak-benefit-box">
                        <div className="benefit-badge-icon">⚡</div>
                        <div>
                            <strong>Daily Rolling Payouts</strong>
                            <span>Automated direct salary credits with ₹0 transfer charges.</span>
                        </div>
                    </div>
                    <div className="kotak-benefit-box">
                        <div className="benefit-badge-icon">📱</div>
                        <div>
                            <strong>Instant Virtual Debit Card</strong>
                            <span>Get your debit card instantly in 5 mins for fuel and daily expenses.</span>
                        </div>
                    </div>
                    <div className="kotak-benefit-box">
                        <div className="benefit-badge-icon">🛡️</div>
                        <div>
                            <strong>DropyHub Loan Eligibility</strong>
                            <span>Qualify for bike finance & emergency loans directly via your Kotak account.</span>
                        </div>
                    </div>
                </div>

                {/* Quick 3-Step Process */}
                <div className="kotak-steps-track">
                    <div className="step-track-item">
                        <div className="step-track-num">1</div>
                        <div className="step-track-info">
                            <strong>Click Below</strong>
                            <span>Open Kotak KYC page</span>
                        </div>
                    </div>
                    <div className="step-track-arrow">→</div>
                    <div className="step-track-item">
                        <div className="step-track-num">2</div>
                        <div className="step-track-info">
                            <strong>Enter Details</strong>
                            <span>Aadhaar + PAN in 3 mins</span>
                        </div>
                    </div>
                    <div className="step-track-arrow">→</div>
                    <div className="step-track-item">
                        <div className="step-track-num">3</div>
                        <div className="step-track-info">
                            <strong>Rolling Payouts Active</strong>
                            <span>Instant salary routing live</span>
                        </div>
                    </div>
                </div>

                {/* Action CTA Area */}
                <div className="kotak-actions-area">
                    <button
                        type="button"
                        className="btn-primary kotak-primary-btn"
                        onClick={handleOpenKotak}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                        <span>Open Kotak 811 Account (Free in 3 Mins)</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </button>

                    {hasClickedLink && (
                        <div className="kotak-confirmation-prompt">
                            <p className="confirmation-msg">
                                Opened the Kotak 811 portal in a new tab. Once you have submitted your KYC, proceed to view your live Rolling Payout Dashboard.
                            </p>
                            <button
                                type="button"
                                className="btn-secondary kotak-confirm-btn"
                                onClick={handleConfirm}
                                disabled={isLoading}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>I've Started / Completed KYC — View Status Dashboard</span>
                            </button>
                        </div>
                    )}
                </div>

                <div className="kotak-disclaimer-footer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Official integration with Kotak Mahindra Bank. 100% RBI regulated, secure 256-bit bank encryption.</span>
                </div>
            </div>
        </div>
    );
}
