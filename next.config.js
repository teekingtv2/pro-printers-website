/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_NAME: 'Vengo Development & Cultural Association',
    API_ENDPOINT: 'http://localhost:2022/api',
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
