/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		URL_API: process.env.URL_API
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	}
}

export default nextConfig
