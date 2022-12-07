const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/h5p',
    createProxyMiddleware({
      target: process.env.API_ENDPOINT,
      changeOrigin: true,
    })
  );
};
