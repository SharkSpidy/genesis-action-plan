/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Preflight is disabled on purpose: this deck already ships a global
  // stylesheet (App.css) that the other ten slides depend on. Turning on
  // Tailwind's base reset would silently re-style headings, lists, tables,
  // and buttons across the whole deck. Utility classes still work fine
  // without it — we just lose the CSS reset, which we don't need here.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#09090b', // zinc-950
          panel: 'rgba(24, 24, 27, 0.6)', // zinc-900 glass
          line: 'rgba(255, 255, 255, 0.08)',
        },
        neon: {
          cyan: '#22d3ee',
          cyanDim: '#0891b2',
          emerald: '#34d399',
          emeraldDim: '#059669',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 0 1px rgba(34,211,238,0.35), 0 0 24px rgba(34,211,238,0.15)',
        'neon-emerald': '0 0 0 1px rgba(52,211,153,0.35), 0 0 24px rgba(52,211,153,0.15)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(9,9,11,0) 0%, rgba(9,9,11,0.9) 85%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '100% 100%, 32px 32px, 32px 32px',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 2.6s ease-in-out infinite',
        'dash-flow': 'dash-flow 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}
