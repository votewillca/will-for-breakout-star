/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  trailingSlash: true, // helps GitHub Pages resolve paths
  distDir: 'docs', // output folder for GitHub Pages
}

export default nextConfig
