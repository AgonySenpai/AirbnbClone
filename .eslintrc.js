module.exports = {
	root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	ecmaFeatures: {
		arrowFunctions: true,
		forOf: true,
		jsx: true,
		spread: true,
		templateStrings: true,
	},
	parserOptions: {
		ecmaVersion: 11,
	},
	rules: {},
	settings: {},
};
