/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  trailingSlash: true, // GitHub Pages prefers trailing slashes
  basePath: '/will-for-breakout-star', // repo name
  assetPrefix: '/will-for-breakout-star/', // fix _next paths
}
export default nextConfig
