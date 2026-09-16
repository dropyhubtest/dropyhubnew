import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light Mode' : 'Dark Mode'}
        >
            <span className="theme-toggle__track">
                <span className="theme-toggle__thumb">
                    {isDark ? (
                        /* Moon icon */
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    ) : (
                        /* Sun icon */
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    )}
                </span>
            </span>
            <span className="theme-toggle__label">
                {isDark ? 'Dark' : 'Light'}
            </span>
        </button>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Warehouse', to: '/warehouse' },
        { label: 'Services', to: '/services' },
        { label: 'Benefits', to: '/benefits' },
        { label: 'Partnership', to: '/partnership' },
    ];

    return (
        <>
            <nav className={`navbar ${(scrolled || menuOpen) ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner container">
                    <Link to="/" className="navbar__logo">
                        <img src="/logo.png" alt="DropyHub Logo" />
                    </Link>

                    <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                        {/* Close button header inside the drawer */}
                        <li className="navbar__drawer-header">
                            <span className="navbar__drawer-title">DropyHub</span>
                            <button
                                className="navbar__close-btn"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </li>

                        {navLinks.map(link => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={({ isActive }) =>
                                        `navbar__link${isActive ? ' navbar__link--active' : ''}`
                                    }
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}

                        {/* Theme toggle in mobile menu */}
                        <li className="navbar__toggle-mobile">
                            <ThemeToggle />
                        </li>

                        <li>
                            <Link
                                to="/apply"
                                className="btn-primary navbar__cta"
                                onClick={() => setMenuOpen(false)}
                            >
                                Join Now - Free
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop right controls */}
                    <div className="navbar__right">
                        <ThemeToggle />
                        <button
                            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile backdrop overlay (outside nav so it covers everything) */}
            {menuOpen && (
                <div
                    className="navbar__backdrop"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Navbar;
