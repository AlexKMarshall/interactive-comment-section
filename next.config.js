const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = createVanillaExtractPlugin(nextConfig)
