/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
  reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "/nextjs-github-page-template",
	},
	basePath: "/nextjs-github-page-template",
	assetPrefix: "/nextjs-github-page-template",
}

module.exports = nextConfig
