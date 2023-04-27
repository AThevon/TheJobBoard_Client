import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect (() => {
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setIsTablet(true);
            } else {
                setIsTablet(false);
            }
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, isTablet, isMobile,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
