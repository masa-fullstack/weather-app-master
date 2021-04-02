module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        background: "url('/images/Cloud-background.png')",
      }),
      fontFamily: {
        Raleway: ['Raleway'],
      },
      rotate: {
        0: '0',
        22: '22deg',
        45: '45deg',
        68: '68deg',
        90: '90deg',
        112: '112deg',
        135: '135deg',
        158: '158deg',
        180: '180deg',
        202: '202deg',
        225: '225deg',
        248: '248deg',
        270: '270deg',
        292: '292deg',
        315: '315deg',
        338: '338deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
