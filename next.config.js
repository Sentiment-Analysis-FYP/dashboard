/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_EXPRESS_BASE_URL: process.env.NEXT_PUBLIC_EXPRESS_BASE_URL,
        NEXT_PUBLIC_EXPRESS_WS_BASE_URL: process.env.NEXT_PUBLIC_EXPRESS_WS_BASE_URL
    },
}

module.exports = nextConfig
