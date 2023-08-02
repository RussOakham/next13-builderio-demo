/** @type {import("prettier").Config} */
const config = {
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
	tabWidth: 2,
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config
