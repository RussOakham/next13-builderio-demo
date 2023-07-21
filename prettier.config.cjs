/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: true,
}

module.exports = config