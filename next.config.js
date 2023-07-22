/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        EXPRESS_BASE_URL: process.env.EXPRESS_BASE_URL
    }
}

module.exports = nextConfig
