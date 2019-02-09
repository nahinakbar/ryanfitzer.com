module.exports = {

    // https://github.com/zeit/next.js/#serverless-deployment
    target: 'serverless',

    // https://github.com/zeit/next.js/#disabling-file-system-routing
    useFileSystemPublicRoutes: false,

    // https://github.com/zeit/next.js#configuring-the-ondemandentries

    onDemandEntries: {
        websocketPort: 3001,
        // optionally configure a proxy path for the onDemandEntries WebSocket, not need by default
        websocketProxyPath: '/hmr',
        // optionally configure a proxy port for the onDemandEntries WebSocket, not need by default
        websocketProxyPort: 3000,
    },

    // https://github.com/zeit/next.js/#customizing-webpack-config
    webpack: ( config ) => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        return config;

    }
};
