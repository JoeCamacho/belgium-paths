const PROXY_CONFIG = {
  "/api/*": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: true
    },
};

module.exports = PROXY_CONFIG;
