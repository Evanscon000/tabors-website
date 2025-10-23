import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                panelBG: '#332E30',
                horizontalDivide: '#606060',
                buttonPrimary: '#01A2FF',
                buttonSecondary: '#797F8B',
                buttonDanger: '#914A4A',
                armyGold: '#FFCC01',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            screens: {
                xs: '200px',
                desktop: '1501px',
                tablet: '1132px',
                phone: '751px'
            },
            display: [
                'group-hover'
            ],
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'trophy-item-l-gradient': 'linear-gradient(to right, #221F20 45%, transparent 90%)',
                'trophy-item-r-gradient': 'linear-gradient(to left, #221F20 51%, transparent 90%)',
                'trophy-item-sm-l-gradient': 'linear-gradient(to right, #221F20 -10%, transparent 100%)',
                'trophy-item-sm-r-gradient': 'linear-gradient(to left, #221F20 -10%, transparent 100%)'
            },
            animation: {
                fadeIn: 'fadeIn .25s ease-in-out',
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0%'
                    },
                    '25%': {
                        opacity: '20%'
                    },
                    '50%': {
                        opacity: '40%'
                    },
                    '75%': {
                        opacity: '60%'
                    },
                    '100%': {
                        opacity: '80%'
                    }
                },
                marquee: {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    }
                },
                marquee2: {
                    '0%': {
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    }
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        },
        fontFamily: {
            gi: [
                'gi'
            ],
            marsek: [
                'marsek'
            ]
        }
    },
    plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}

export default config
