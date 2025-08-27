/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/will-for-breakout-star', // <<<--- THIS IS THE FIX
  images: {
    unoptimized: true,
  },
}

export default nextConfig
