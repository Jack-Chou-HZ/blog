/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "42.192.123.130"],
  },
}

module.exports = nextConfig
