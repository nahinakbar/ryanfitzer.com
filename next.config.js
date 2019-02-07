module.exports = {

    // https://github.com/zeit/next.js/#serverless-deployment
    target: 'serverless',

    // https://github.com/zeit/next.js/#disabling-file-system-routing
    useFileSystemPublicRoutes: false,

    // onDemandEntries: {
    //     // period (in ms) where the server will keep pages in the buffer
    //     maxInactiveAge: 25 * 1000,
    //     // number of pages that should be kept simultaneously without being disposed
    //     pagesBufferLength: 2,
    //     // optionally configure a port for the onDemandEntries WebSocket, not needed by default
    //     websocketPort: 3001,
    //     // optionally configure a proxy path for the onDemandEntries WebSocket, not need by default
    //     websocketProxyPath: '/hmr',
    //     // optionally configure a proxy port for the onDemandEntries WebSocket, not need by default
    //     websocketProxyPort: 7002
    // },

    // https://github.com/zeit/next.js/#customizing-webpack-config
    webpack: ( config ) => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        return config;

    }
};
