require('dotenv').config();
const withOffline = require('next-offline');

const nextConfig = {
  generateInDevMode: true,
  workboxOpts: {
    maximumFileSizeToCacheInBytes: 20000000,
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.*(?:googleapis)\.com.*$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|css)$/,
        handler: 'CacheFirst',
      },
    ],
  },
  env: {
    APOLLO_URL: process.env.APOLLO_URL,
    LINE_CLIENT_KEY: process.env.LINE_CLIENT_KEY,
    LINE_SECRET_KEY: process.env.LINE_SECRET_KEY,
    LINE_REDIRECT_URI: process.env.LINE_REDIRECT_URI,
    LINE_REDIRECT_LINK: process.env.LINE_REDIRECT_LINK,
    OMISE_PUBLIC_KEY: process.env.OMISE_PUBLIC_KEY,
  },
};

module.exports = withOffline(nextConfig);
