/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    darkMode: 'selector',
    theme: {
        screens: {
            xs: '380px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                purple: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065',
                },
                accent: {
                    pink: '#ec4899',
                    indigo: '#6366f1',
                    violet: '#8b5cf6',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                },
            },
            keyframes: {
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'spin-slow': 'spin-slow 30s linear infinite',
            },
            dropShadow: {
                '2xl': '0 10px 15px -3px rgba(99, 102, 241, 0.7), 0 4px 6px -2px rgba(99, 102, 241, 0.05)',
            },
        },
        fontFamily: {
            'great-vibes': ['Great Vibes', 'cursive'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}
