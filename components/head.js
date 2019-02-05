import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';

const Head = ( props ) => (
    <NextHead>
        <meta charSet='UTF-8' />
        <title>{ props.title || '' }</title>
        <meta
            name='description'
            content={ props.description || defaultDescription }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' type='image/x-icon' href='/static/images/favicon.ico' />
    </NextHead>
);

Head.propTypes = {
    title: string,
    description: string
};

export default Head;
