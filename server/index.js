const fs = require( 'fs' );
const path = require( 'path' );
const next = require( 'next' );
const https = require( 'https' );
const { parse } = require( 'url' );
const express = require( 'express' );
const proxy = require( 'http-proxy-middleware' );
const { routes } = require( '../library/js/routes.js' );

const nxt = next( { dev: true } );
const handle = nxt.getRequestHandler();
const imagePlaceholder = require( './middleware/image-placeholder' );

const port = process.env.PORT || 3000;
const wsProxy = proxy('/hmr', { target: 'ws://localhost:3001' });
const protocol = process.env.PROTOCOL || 'http';
const listenHandler = ( err ) => console.info( `Ready on ${ protocol }://localhost:${ port }` );

nxt.prepare().then( () => {

    const app = express();

    // Image placeholder
    app.use( imagePlaceholder( express ) );

    // websocket proxy
    app.use(wsProxy);

    // Routes
    routes.forEach( ( { name, pathname, pattern } ) => {

        if ( name === 'Error' ) return;

        app.get( pattern, ( req, res ) => {

            return nxt.render( req, res, pathname, req.params );

        } );

    } );

    app.get( '*', ( req, res ) => {

        return handle( req, res, parse( req.url ) );

    } );

    if ( protocol === 'https' ) {

        https.createServer( {
            requestCert: false,
            rejectUnauthorized: false,
            key: fs.readFileSync( path.resolve( __dirname, 'localhost.key' ) ),
            cert: fs.readFileSync( path.resolve( __dirname, 'localhost.cert' ) )
        }, app ).listen( port, listenHandler ).on('upgrade', wsProxy.upgrade);

    }
    else {

        app.listen( port, listenHandler );

    }


} )
.catch( ( err ) => {

    throw Error( err );

} );