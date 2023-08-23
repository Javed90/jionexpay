/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOST: "",
    apiKey: "",
    orgId: "",
    userId: "",
    type: "",
    API_HOST_ADMIN: "",
  },
};

module.exports = nextConfig
