/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '2000px'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
            fontSize: {
                xs: '0.8125rem'
            },
            colors: {
                gray: {
                    50: '#f8f7fa',
                    100: '#eeedf0',
                    700: '#a3a3a3',
                    900: '#19181a'
                }
            },
            boxShadow: {
                lg: '0px 1px 3px 0px rgba(19, 10, 46, 0.13), 0px 3px 14px 0px rgba(19, 10, 46, 0.03),0px 8px 32px 0px rgba(19, 10, 46, 0.07), 0px 30px 84px 0px rgba(19, 10, 46, 0.08)'
            }
        },
        variants: {
            extend: {},
        }
    },
    plugins: [],
}
