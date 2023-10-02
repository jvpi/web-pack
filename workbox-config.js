module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,jpg,jpeg,webp,eot,svg,ttf,woff,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};