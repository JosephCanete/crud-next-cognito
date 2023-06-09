const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client side
    USER_POOL_ID: process.env.USER_POOL_ID,
    CLIENT_ID: process.env.CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
};

module.exports = nextConfig;
