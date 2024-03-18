const nextConfig = {
	env: {
		URL_API: process.env.URL_API
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/auth',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
