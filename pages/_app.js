import React from 'react';
import App, { Container } from 'next/app';
import Head from '../components/head';
import Nav from '../components/nav';
import { match } from '../library/js/routes.js';

export default class MyApp extends App {

    constructor( props ) {

        super( props );

    }

    static async getInitialProps( { Component, ctx, ...rest } ) {

        MyApp.configureContext( ctx );

        const pageProps = await MyApp.getComponentProps( Component, ctx );

        return {
            pageProps,
            pageName: ctx.pageName
        };

    }

    static configureContext( ctx ) {

        return Object.assign( ctx, {
            isServer: !!ctx.req,
            pageName: match( ctx.pathname ).name,
            renderType: ctx.req ? 'server' : 'browser'
        } );

    }

    static async getComponentProps( Component, ctx ) {

        if ( !Component.getInitialProps ) return;

        return await Component.getInitialProps( ctx );

    }

    render() {

        console.log( 'App', this.props );

        const {
            Component,
            pageName,
            pageProps
        } = this.props;

        return (
            <Container>
                <Head title={ pageName } />
                <Nav />
                <Component { ...pageProps } />
            </Container>

        );

    }

}