/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
  reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "",
	},
	basePath: "",
	assetPrefix: "",
}

module.exports = nextConfig
