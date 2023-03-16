/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	// nextConfig,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/ggll893a/production/**',
			},
		],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
				path: false,
			}
		}

		return config
	},
}
