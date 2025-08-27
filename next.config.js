/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  images: { unoptimized: false }, // restore optimization
  output: undefined, // remove static export
}

export default nextConfig
