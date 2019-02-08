module.exports = {

    // https://github.com/zeit/next.js/#serverless-deployment
    target: 'serverless',

    // https://github.com/zeit/next.js/#disabling-file-system-routing
    useFileSystemPublicRoutes: false,

    // https://github.com/zeit/next.js/#customizing-webpack-config
    webpack: ( config ) => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        return config;

    }
};
