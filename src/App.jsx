import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BenefitsPage from './pages/BenefitsPage';
import PartnershipPage from './pages/PartnershipPage';
import WarehousePage from './pages/WarehousePage';
import ApplyPage from './pages/ApplyPage';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="benefits" element={<BenefitsPage />} />
                    <Route path="partnership" element={<PartnershipPage />} />
                    <Route path="warehouse" element={<WarehousePage />} />
                    <Route path="apply" element={<ApplyPage />} />
                    <Route path="refund-policy" element={<RefundPolicy />} />
                    <Route path="terms-of-service" element={<TermsOfService />} />
                    <Route path="privacy-policy" element={<PrivacyPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
