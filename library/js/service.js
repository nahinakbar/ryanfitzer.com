import https from 'https';
import axios from 'axios';
import nmsp from 'nmsp';
import queryString from 'query-string';

class Service {

    static errorHandler( error ) {

        if ( error.response ) {

            [
                `\n[Error: Response] The server responded with a ${ error.response.status } status code.`,
                '\ndata:',
                error.response.data,
                '\nheaders:',
                error.response.headers
            ].forEach( ( item ) => console.error( item ) );

        }
        else if ( error.request ) {

            [
                '\n[Error: Request] The request was made but no response was received.',
                '\nrequest: ',
                error.request
            ].forEach( ( item ) => console.error( item ) );

        }
        else {

            console.error( '\n[Error] Something happened in setting up the request that triggered an Error', error.message );

        }

        console.error( '\nconfig:', error.config );

        return {
            error: {
                status: nmsp.atPath( 'response.status', error ),
                message: error.message,
                data: nmsp.atPath( 'response.data', error )
            }
        };

    }

    constructor() {

        if ( !Service.instance ) {

            Service.instance = this;

        }

        return Service.instance;

    }

    configure( options ) {

        const {
            key,
            endpoint
        } = options;

        this.key = key;
        this.endpoint = endpoint;

    }

    instance( name, configuration ) {

        const config = Object.assign(
            {
                timeout: 10000,
                maxRedirects: 0,
                paramsSerializer: queryString.stringify,
                headers: {},
                httpsAgent: new https.Agent(
                    {
                        keepAlive: true,
                        rejectUnauthorized: false // Temporary
                    }
                )
            },
            this.getServiceConfig( name ),
            configuration
        );

        return axios.create( config );

    }

    getServiceConfig( name ) {

        switch ( name ) {

            case 'posts':

                return {
                    method: 'get',
                    baseURL: 'https://ryanfitzer.gitlab.io/ryanfitzer.com.content/posts.json'
                };

            default:

                return undefined;

        }

    }

    async get( name, configuration ) {

        return await this.instance( name, configuration )
        .request()
        .then( ( res ) => res.data )
        .catch( Service.errorHandler );

    }

}

export default new Service();