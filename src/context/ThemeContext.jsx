import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Default: dark. Check localStorage for saved preference.
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('dropyhub-theme');
        return saved ? saved === 'dark' : true;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('dropyhub-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('dropyhub-theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
