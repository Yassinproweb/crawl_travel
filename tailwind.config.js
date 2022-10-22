/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '497px',
      xsm: '611px',
      md: '737px',
      lg: '967px'
    },
    extend: {
      colors: {
        tail_light: 'hsl(135, 95%, 97%)',
        tail_l_theme: 'hsl(135, 95%, 97%, .45)',
        tail_green: 'hsl(135, 95%, 45%)',
        tail_g_theme: 'hsl(135, 95%, 45%, .65)',
        tail_g_thru: 'hsl(135, 95%, 45%, .85)',
        tail_yellow: 'hsl(135, 95%, 93%, .79)',
        tail_dark: 'hsl(135, 95%, 7%)',
        tail_d_theme: 'hsl(135, 95%, 7%, .55)',
        tail_d_thru: 'hsl(135, 95%, 7%, .85)',
      }
    },
  },
  plugins: [],
}
