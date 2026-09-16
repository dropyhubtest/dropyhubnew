import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
    const { pathname } = useLocation();

    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <ScrollToTop />
            <Footer />
        </>
    );
};

export default Layout;
