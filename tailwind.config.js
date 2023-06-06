/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      button: {
        paddingY: '2',
        paddingX: '4',
        backgroundColor: '#3b82f6',
        color: '#fff',
        fontWeight: 'semibold',
        borderRadius: 'lg',
        '&:hover': {
          backgroundColor: '#2563eb',
        },
        transitionProperty: 'colors',
        transitionDuration: '300ms',
      },
  },
  plugins: [],
}}
