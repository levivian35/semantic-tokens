// Pricing.jsx — Page component that assembles pricing cards with plan data.

import PricingCard from '../components/PricingCard/PricingCard';
import { useEffect, useState } from 'react';

function Pricing() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const preferred =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        const next = saved === 'dark' || saved === 'light' ? saved : preferred;

        setTheme(next);
        document.documentElement.dataset.theme = next;
    }, []);

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.dataset.theme = next;
        localStorage.setItem('theme', next);
    }

    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <p className="text-sm text-text-secondary bg-card px-4 py-2 rounded-lg shadow-sm">
                    <strong className="text-text-primary">React App</strong> — running with Vite + Tailwind Tokens
                </p>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="text-sm text-text-primary bg-card px-3 py-2 rounded-lg shadow-sm hover:bg-btn-secondary-hover transition-colors duration-200"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>

            <div className="flex gap-6 justify-center items-start">
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
            </div>
        </>
    );
}

export default Pricing;
