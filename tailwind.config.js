module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["'Public Sans'", "sans-serif"]
      },
      colors: {
        blueDark: 'hsl(233, 26%, 24%)',
        greenLime: 'hsl(136, 65%, 51%)',
        cyanBright: 'hsl(192, 70%, 51%)',
        blueGray: 'hsl(233, 8%, 62%)',
        blueGrayLight: 'hsl(220, 16%, 96%)',
        grayLight: 'hsl(0, 0%, 98%)'
      },
      backgroundImage: {
        'desktop': "url('/src/assets/images/bg-intro-desktop.svg')",
        'mobile': "url('/src/assets/images/bg-intro-mobile.svg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
