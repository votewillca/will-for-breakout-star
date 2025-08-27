/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  images: { unoptimized: true }, // restore image optimization
}

export default nextConfig
