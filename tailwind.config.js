module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0F375A',

          secondary: '#F9AF21',

          accent: '#F5F9FA',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#006FFD',

          success: '#12B76A',

          warning: '#FFF4DE',

          error: '#E45E58',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
