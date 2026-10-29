/**
 * Purpose: Tailwind theme for the "Secure Core" palette.
 * Only these six colours are used across the site; borders and glows are
 * translucent versions of them.
 */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        core: '#0F172A',
        surface: '#1E293B',
        crimson: '#E11D48',
        matrix: '#10B981',
        head: '#F8FAFC',
        body: '#94A3B8',
        line: 'rgba(148, 163, 184, 0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        site: '72rem'
      }
    }
  },
  plugins: []
};
