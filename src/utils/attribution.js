// Attribution and Applicant Tracking Engine for Dropyhub

const STORAGE_KEY = 'dropyhub_attribution';
const APPLICANT_STORAGE_KEY = 'dropyhub_applicant_state';

// Primary Kotak 811 Zero Balance Savings & Salary Account Redirection URL
const KOTAK_TARGET_URL = 'https://www.kotak811.bank.in/open-zero-balance-savings-account?utm_source=GoogleSEMiQ&utm_medium=Paid&utm_campaign=iQ-Kotak-BA-Bank-Account-Brand-All-India-Ex-NS-12-25_Non-ZB-Exact&utm_content=kotak%20811&gad_source=1&gad_campaignid=23333657968&gbraid=0AAAAACQ2IDkMJ6SxkI2VPJDbrghz2ZqlI&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9NudcOINkX5MU1njBYP4b1hTQqPoL56vGi8XMJDb4sD1PJfN9HOgrBoCprkQAvD_BwE';

/**
 * Generates a unique applicant tracking ID (sub_id)
 * Format: DH-<PARTNER_PREFIX>-<TIMESTAMP_RADIX36>-<RANDOM>
 */
export function generateApplicantId(partner = 'PAYROLL') {
    const cleanPartner = partner.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7) || 'PAYROLL';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DH-${cleanPartner}-${timestamp}-${random}`;
}

/**
 * Initializes and captures attribution parameters from URL (UTMs, ref, sub_id)
 */
export function getAttributionParams() {
    if (typeof window === 'undefined') return {};

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');

        const current = {
            utm_source: urlParams.get('utm_source') || stored.utm_source || 'direct',
            utm_medium: urlParams.get('utm_medium') || stored.utm_medium || 'organic',
            utm_campaign: urlParams.get('utm_campaign') || stored.utm_campaign || 'company_payroll_onboarding',
            utm_content: urlParams.get('utm_content') || stored.utm_content || '',
            ref: urlParams.get('ref') || stored.ref || '',
            sub_id: urlParams.get('sub_id') || stored.sub_id || '',
            landing_page: window.location.pathname,
            captured_at: stored.captured_at || new Date().toISOString()
        };

        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
        return current;
    } catch (e) {
        console.warn('Could not access sessionStorage for attribution:', e);
        return { utm_source: 'direct' };
    }
}

/**
 * Constructs the Kotak Bank onboarding redirect URL with sub_id and applicant metadata
 */
export function buildKotakRedirectUrl(applicantId, details = {}) {
    try {
        const url = new URL(KOTAK_TARGET_URL);
        if (applicantId) {
            url.searchParams.set('sub_id', applicantId);
            url.searchParams.set('applicant_id', applicantId);
        }
        if (details.name) url.searchParams.set('name', details.name);
        if (details.phone) url.searchParams.set('phone', details.phone);
        if (details.city) url.searchParams.set('city', details.city);
        return url.toString();
    } catch (e) {
        return KOTAK_TARGET_URL;
    }
}

/**
 * Saves applicant state locally so user can track status or resume Kotak KYC
 */
export function saveApplicantState(state) {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(APPLICANT_STORAGE_KEY, JSON.stringify({
            ...state,
            updatedAt: new Date().toISOString()
        }));
    } catch (e) {
        console.warn('Could not save applicant state:', e);
    }
}

/**
 * Retrieves existing applicant state if any
 */
export function getSavedApplicantState() {
    if (typeof window === 'undefined') return null;
    try {
        const data = localStorage.getItem(APPLICANT_STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        return null;
    }
}
