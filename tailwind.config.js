const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
      textColor: {
        secondary: '#2a2a2a',
      },
      backgroundColor: {
        default: '#3863a2',
        primary: '#304561',
        secondary: '#2a2a2a',
        tertiary: '#ebeff6',
      },
      colors: {
        azure: colors.sky,
        pink: {
          100: '#ffebef',
          200: '#ffd6e0',
          300: '#fdb4c6',
          400: '#fb83a3',
          500: '#f65a8e',
          600: '#d9367f',
          700: '#b43179',
          800: '#8f2468',
          900: '#691f53',
        },
        orange: colors.orange,
        green: colors.lime,
        cyan: colors.cyan,
      },
      gradientColorStops: {
        ocean1: '#007cf0',
        ocean2: '#00dfd8',
        violet1: '#7928ca',
        violet2: '#ff0080',
        sun1: '#ff4d4d',
        sun2: '#f9cb28',
      },
      padding: {
        '1/10': '10%',
      },
      fontFamily: {
        content: ['Ubuntu', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [],
}
