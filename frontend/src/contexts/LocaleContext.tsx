import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'ne';

interface LocaleContextType {
    locale: Locale;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [locale, setLocale] = useState<Locale>(() => {
        const saved = localStorage.getItem('preferred_locale');
        return (saved === 'en' || saved === 'ne') ? saved : 'en';
    });

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'ne' : 'en';
        setLocale(newLocale);
        localStorage.setItem('preferred_locale', newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
