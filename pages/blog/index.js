import React from 'react';
import Link from 'next/link';
import service from '../../library/js/service';

const About = ( props ) => {

    const slug = props.query.slug;
    const title = slug ? ` Post: ${ slug }` : 'Blog';

    console.log( 'Blog', props );

    return (
        <div>

            <h1>{ title }</h1>

            <p>Render method: <code>{ props.renderType }</code></p>

            { !slug &&
                <ul>
                    { props.posts.map( ( { name } ) => {

                        let title = name.match( /(\d+-\d+-\d+-)?([^.]+)/i )[2];

                        title = title.replace( /-/g, ' ' );

                        return (
                            <li key={ name }>
                                <Link href={ `/blog?slug=${ title }` } as={ `/blog/${ title }` }>
                                    <a>{ title }</a>
                                </Link>
                            </li>
                        );

                    } ) }
                </ul>
            }

        </div>
    );

};

About.getInitialProps = async ( { req, res, ...rest } ) => {


    return {
        ...rest,
        posts: await service.get( 'posts' )
    };

};

export default About;
