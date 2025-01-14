module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This includes all the files that will use Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e62b1e',
        secondary: '#ff6b6b',
        accent: '#4f46e5',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },
    },
  },
  plugins: [],
}
