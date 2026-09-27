/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#020403', // الأسود الفحمي الداكن
          900: '#141413', // الأسود الرمادي العميق
          850: '#1A2324', // الأخضر الرمادي للبطاقات والخلفيات
          800: '#242E2F',
          750: '#323E3F',
          700: '#5F2E1B', // البني النحاسي الفاخر
          650: '#4A2315',
        },
        violet: {
          300: '#FFFFFF',
          400: '#E0E6E6', // نصوص واضحة ومقروءة تماماً
          500: '#5F2E1B',
          600: '#4A2315',
          700: '#35180E',
        },
        coral: {
          300: '#323E3F',
          400: '#1A2324',
          500: '#141413',
          600: '#5F2E1B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orb-float': 'orbFloat 10s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(95,46,27,0.15)' },
          '50%': { boxShadow: '0 0 50px rgba(95,46,27,0.4)' },
        },
        orbFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,30px) scale(0.95)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(95,46,27,0.08) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(95,46,27,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(95,46,27,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};