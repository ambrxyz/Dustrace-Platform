/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — warmer, deeper, more sophisticated
        bg: '#F5F3EF',
        'bg-warm': '#EDE9E3',
        'bg-cool': '#F0F2F5',
        surface: '#FFFFFF',
        'surface-hover': '#FAF9F7',
        elevated: '#F0EDE8',
        'elevated-hover': '#E8E4DD',
        border: '#D6D1C8',
        'border-subtle': '#E5E1DA',
        'border-hover': '#C4BEB2',

        // Accent — deep amber with warmth
        accent: '#B45309',
        'accent-deep': '#8B3A00',
        'accent-hover': '#9A4400',
        'accent-soft': 'rgba(180, 83, 9, 0.06)',
        'accent-medium': 'rgba(180, 83, 9, 0.12)',
        'accent-glow': 'rgba(180, 83, 9, 0.15)',

        // Secondary — indigo
        secondary: '#6D28D9',
        'secondary-soft': 'rgba(109, 40, 217, 0.06)',

        // Semantic colors — refined
        danger: '#C12B29',
        'danger-soft': 'rgba(193, 43, 41, 0.06)',
        'danger-medium': 'rgba(193, 43, 41, 0.12)',
        warning: '#C47A0A',
        'warning-soft': 'rgba(196, 122, 10, 0.06)',
        'warning-medium': 'rgba(196, 122, 10, 0.12)',
        success: '#036B4A',
        'success-soft': 'rgba(3, 107, 74, 0.06)',
        'success-medium': 'rgba(3, 107, 74, 0.12)',

        // Dust
        dust: '#8B4513',
        'dust-soft': 'rgba(139, 69, 19, 0.06)',

        // PM levels
        'pm-high': '#C12B29',
        'pm-med': '#C47A0A',
        'pm-low': '#036B4A',

        // Text
        'text-primary': '#1C1917',
        'text-secondary': '#6B6560',
        'text-tertiary': '#9E948C',
        'text-muted': '#B8B0A8',
        'text-placeholder': '#C4BEB2',

        // Overlay
        overlay: 'rgba(28, 25, 23, 0.4)',
        'overlay-light': 'rgba(28, 25, 23, 0.08)',
      },

      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"DM Mono"', '"Courier New"', 'monospace'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],    // 10px
        xs: ['0.6875rem', { lineHeight: '1rem' }],           // 11px
        sm: ['0.75rem', { lineHeight: '1.125rem' }],         // 12px
        base: ['0.8125rem', { lineHeight: '1.375rem' }],     // 13px
        md: ['0.875rem', { lineHeight: '1.375rem' }],        // 14px
        lg: ['0.9375rem', { lineHeight: '1.5rem' }],         // 15px
        xl: ['1.0625rem', { lineHeight: '1.5rem' }],         // 17px
        '2xl': ['1.25rem', { lineHeight: '1.4rem' }],        // 20px
        '3xl': ['1.5rem', { lineHeight: '1.3rem' }],         // 24px
        '4xl': ['1.875rem', { lineHeight: '1.15rem' }],      // 30px
        '5xl': ['2.375rem', { lineHeight: '1.05rem' }],      // 38px
        '6xl': ['3rem', { lineHeight: '1rem' }],             // 48px
        '7xl': ['4rem', { lineHeight: '1rem' }],             // 64px
      },

      borderRadius: {
        xs: '6px',
        sm: '8px',
        DEFAULT: '10px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        pill: '9999px',
      },

      boxShadow: {
        'xs': '0 1px 2px rgba(28, 25, 23, 0.03)',
        'sm': '0 1px 3px rgba(28, 25, 23, 0.04), 0 1px 2px rgba(28, 25, 23, 0.02)',
        'md': '0 4px 12px rgba(28, 25, 23, 0.04), 0 1px 2px rgba(28, 25, 23, 0.02)',
        'lg': '0 8px 24px rgba(28, 25, 23, 0.05), 0 2px 4px rgba(28, 25, 23, 0.02)',
        'xl': '0 16px 40px rgba(28, 25, 23, 0.06), 0 4px 8px rgba(28, 25, 23, 0.02)',
        '2xl': '0 24px 60px rgba(28, 25, 23, 0.08), 0 8px 16px rgba(28, 25, 23, 0.03)',
        'glow-accent': '0 4px 20px rgba(180, 83, 9, 0.15)',
        'glow-accent-lg': '0 8px 32px rgba(180, 83, 9, 0.2)',
        'glow-danger': '0 4px 20px rgba(193, 43, 41, 0.12)',
        'inner-sm': 'inset 0 1px 2px rgba(28, 25, 23, 0.03)',
        'inner-md': 'inset 0 2px 4px rgba(28, 25, 23, 0.04)',
      },

      animation: {
        // Core
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.4s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.4s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.4s ease-out forwards',

        // Scale
        'scale-in': 'scaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'scale-in-sm': 'scaleInSm 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',

        // Slide
        'slide-up': 'slideUp 0.35s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',

        // Bounce
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',

        // Pulse
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'pulse-danger': 'pulseDanger 2s ease-in-out infinite',

        // Shimmer (for loading)
        shimmer: 'shimmer 2s linear infinite',

        // Spin
        'spin-slow': 'spin 3s linear infinite',

        // Breath
        breathe: 'breathe 3s ease-in-out infinite',

        // Float
        float: 'float 4s ease-in-out infinite',

        // Notification
        'notif-slide': 'notifSlide 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',

        // Card stagger
        'card-1': 'fadeInUp 0.45s ease-out 0.03s forwards',
        'card-2': 'fadeInUp 0.45s ease-out 0.06s forwards',
        'card-3': 'fadeInUp 0.45s ease-out 0.09s forwards',
        'card-4': 'fadeInUp 0.45s ease-out 0.12s forwards',
        'card-5': 'fadeInUp 0.45s ease-out 0.15s forwards',
        'card-6': 'fadeInUp 0.45s ease-out 0.18s forwards',
        'card-7': 'fadeInUp 0.45s ease-out 0.21s forwards',

        // Gauge fill
        'gauge-fill': 'gaugeFill 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',

        // Sonar
        sonar: 'sonar 2.5s ease-out infinite',

        // Dust float
        'dust-float': 'dustFloat 5s ease-in-out infinite',
        'dust-float-2': 'dustFloat 7s ease-in-out 1s infinite',
        'dust-float-3': 'dustFloat 6s ease-in-out 2s infinite',

        // Count up
        'count-up': 'countUp 1.1s ease-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleInSm: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(16px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(180, 83, 9, 0.2)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 8px rgba(180, 83, 9, 0)' },
        },
        pulseDanger: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(193, 43, 41, 0.2)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 0 8px rgba(193, 43, 41, 0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        notifSlide: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sonar: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        dustFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(15px, -12px) scale(1.2)', opacity: '0.2' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
        },
        gaugeFill: {
          '0%': { strokeDashoffset: '314.16' },
          '100%': { strokeDashoffset: 'var(--gauge-offset)' },
        },
        countUp: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },

      backdropBlur: {
        xs: '2px',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
