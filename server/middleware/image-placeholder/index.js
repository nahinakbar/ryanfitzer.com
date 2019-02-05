/*
    Image Placeholder Middleware
    Based on https://github.com/charliekassel/vuejs-image-placeholder

    Returns an SVG for use in <img/> tags.

    Usage:

    Image 100px x 100px with the text "100x100":
        <img src="/placeholder/100/100" />

    Image 100px x 100px with the text "Hello":
        <img src="/placeholder/100/100/Hello" />

    Image 100px x 100px with no text:
        <img src="/placeholder/100/100/null" />
*/

module.exports = ( express ) => {

    const router = express.Router();

    router.get( '/placeholder/:width/:height/:text?', ( req, res ) => {

        const { width, height, text } = req.params;
        let displayText = text;

        if ( !text ) {

            displayText = `${ width }x${ height }`;

        }
        else if ( text === 'null' ) {

            displayText = '';

        }

        // https://css-tricks.com/scale-svg
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${ width }" height="${ height }" viewBox="0 0 ${ width } ${ height }">
              <rect width="100%" height="100%" style="fill: #ccc"/>
              <line x1="0" y1="0" x2="100%" y2="100%" stroke-width="1" stroke="#ddd"/>
              <line x1="100%" y1="0" x2="0" y2="100%" stroke-width="1" stroke="#ddd"/>
              <text
                x="50%"
                y="50%"
                style="font-size: 28px; font-family: monospace, sans-serif;"
                fill="#666"
                text-anchor="middle"
                alignment-baseline="middle">
                ${ displayText }
              </text>
            </svg>
        `;

        res.type( 'image/svg+xml' );
        res.send( svg );

    } );

    return router;

};