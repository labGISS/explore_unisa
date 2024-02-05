const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',  // Questo è il percorso del tuo backend o del servizio di routing
        createProxyMiddleware({
            target: 'https://api.openrouteservice.org',
            changeOrigin: true,
        })
    );
};
