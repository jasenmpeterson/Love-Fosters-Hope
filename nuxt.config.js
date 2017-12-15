module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: 'Love Fosters Hope',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Love Fosters Hope' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	css: ['assets/css/global.css'],
	plugins: ['~/plugins/push-menu/index.js'],
	/*
  ** Customize the progress bar color
  */
	loading: { color: 'rgba(252,205,0,1)' },
	/*
  ** Build configuration
  */
	build: {
		vendor: ['axios'],
		/*
    ** Run ESLint on save
    */
		extend(config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
