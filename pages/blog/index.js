import React from 'react';

const About = ( props ) => {

    const slug = props.query.slug;
    const title = slug ? ` Post: ${ slug }` : '';

    console.log( 'Blog', props );

    return (
        <div>

            <h1>{ props.pageName }{ title }</h1>

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
