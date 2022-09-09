/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'upload.wikimedia.org',
			'm.media-amazon.com',
			'denofgeek.com',
		],
	},
}

module.exports = nextConfig
