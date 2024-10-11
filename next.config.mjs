/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['jotai-devtools'],
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
