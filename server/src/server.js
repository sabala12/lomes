import Hapi from '@hapi/hapi';
import routes from './routes.js'

module.exports = async (options) => {

	const server = Hapi.server(
		Object.assign({
			port: options.port,
			host: options.host,
			routes: {
				cors: {
					origin: ['*'],
				},
			},
		}),
	);

        await server.register([
                {
                        plugin: require('@hapi/good'),
                        options: {
                                ops: {
                                        interval: 1000,
                                },
                                reporters: {
                                        consoleReporter: [
                                                {
                                                        module: '@hapi/good-squeeze',
                                                        name: 'Squeeze',
                                                        args: [{response: '*'}],
                                                },
                                                {
                                                        module: '@hapi/good-console',
                                                },
                                                'stdout',
                                        ],
                                },
                        },

                },
        ])

	server.route(routes);

	return server;
};
