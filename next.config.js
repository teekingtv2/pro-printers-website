/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_NAME: 'Pro Printers Agency Limited',
    // API_ENDPOINT: 'http://localhost:2022/api',
    // API_ENDPOINT: 'https://vedca-usa-backend.onrender.com/api',
    API_ENDPOINT: 'https://server.vedcausa.org/api',
  },
  //   experimental: {
  //     serverActions: true,
  //   },
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
};

module.exports = nextConfig;
