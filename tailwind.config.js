module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend:{
      colors:{
        'light-grey':' hsl(0, 0%, 98%)',
        'medium-grey':'hsl(0, 0%, 41%)',
        'dark-grey':' hsl(0, 0%, 8%)'
      }
    }
  },
  plugins: [
    require('autoprefixer')
  ],
};

