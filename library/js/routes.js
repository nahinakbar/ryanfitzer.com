const routes = [
    {
        name: 'Blog',
        pathname: '/blog',
        pattern: '/blog/:slug?'
    },
    {
        name: 'Error',
        pathname: '/_error',
        pattern: '/_error'
    },
    {
        name: 'Home',
        pathname: '/home',
        pattern: '/'
    }
];

const match = ( pathname = '' ) => {

    return routes.reduce( ( accum, route ) => {

        if ( pathname === route.pathname ) return route;

        return accum;

    }, {} );

};

module.exports.routes = routes;
module.exports.match = match;