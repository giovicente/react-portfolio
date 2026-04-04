module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // light premium palette
        bg: '#f5f6f7',         // off-white page background
        surface: '#ffffff',    // card / surface
        muted: '#6b7280',      // secondary text (cool gray)
        accent: '#2b6a91',     // refined slate-blue accent
        text: '#0f1724',       // near-black for primary text
        border: '#e6e9ec'      // soft border
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto']
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(9, 30, 45, 0.06)', // subtle depth
        'card': '0 6px 18px rgba(12, 20, 30, 0.06)'
      },
      borderRadius: {
        'xl': '12px'
      }
    }
  },
  plugins: []
}
