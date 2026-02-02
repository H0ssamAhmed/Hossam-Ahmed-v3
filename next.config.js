/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['portfolio-server-bvd9nijwr-h0ssamahmeds-projects.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
      },
    ],
  },
}

module.exports = nextConfig

