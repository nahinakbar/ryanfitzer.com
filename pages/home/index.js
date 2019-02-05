import React, { Component } from 'react';

class Home extends Component {

    constructor( props ) {

        super( props );

    }

    static async getInitialProps( { req, res, ...rest } ) {

        return {
            ...rest
        };

    }

    render() {

        const {
            pageName,
            renderType
        } = this.props;

        console.log( 'Home', this.props );

        return (
            <div>

                <h1>{ pageName }</h1>

                <p>Render method: <code>{ renderType }</code></p>

            </div>
        );

    }

}

export default Home;
