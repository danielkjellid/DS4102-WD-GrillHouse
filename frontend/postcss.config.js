module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),
    //require('postcss-import'),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer'),
  ]
}