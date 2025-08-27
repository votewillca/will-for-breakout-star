/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable export mode for static HTML
  output: 'export',

  // 2. Image settings – disable Next.js optimization for static export
  images: {
    unoptimized: true,
  },

  // 3. Optional experimental optimization
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },

  // 4. Trailing slash so GitHub Pages works nicely
  trailingSlash: true,
}

export default nextConfig
