/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  },
};

module.exports = nextConfig;
