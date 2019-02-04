import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component {

    constructor( props ) {

        super( props );

    }

    static async getInitialProps( { req, res, ...rest } ) {

        // console.log( require( 'util' ).inspect( rest, { depth: 5, colors: true } ) );

        return {
            name: 'Home'
        };

    }

    render() {

        return (
            <div>

                <h1>{ this.props.name }</h1>

                <p>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </p>

                <style jsx>{ `` }</style>
            </div>
        );

    }

}

// const Home = () => (
//     <div>
//         <Head title='Home' />
//         <Nav />
//
//         <h1>Home</h1>
//
//         <p>
//             <Link href='/about'>
//                 <a>About</a>
//             </Link>
//         </p>
//
//         <style jsx>{ `` }</style>
//     </div>
// );
//
// Home.getInitialProps = async ( ctx ) => {
//
//     console.log( ctx );
//
// };

export default Home;
