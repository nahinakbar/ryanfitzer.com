import React from 'react';

const About = ( props ) => {

    console.log( 'About', props );

    return (
        <div>

            <h1>{ props.pageName }</h1>

            <p>Render method: <code>{ props.renderType }</code></p>

        </div>
    );

};

About.getInitialProps = async ( { req, res, ...rest } ) => {

    return {
        ...rest
    };

};

export default About;
