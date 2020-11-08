import 'dotenv/config';

import createServer from './server'
//import createDB from './database'

const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/lomes';

const init = async () => {

	const server = await createServer({

		host: process.env.HOST,
		port: process.env.PORT,
	});


	mongoose.connect(mongoDbUri);
	mongoose.connection.on('connected', () => {
		console.log(`app is connected to ${mongoDbUri}`);
	});
	mongoose.connection.on('error', err => {
		console.log('error while connecting to mongodb', err);
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

	console.log(err);
	process.exit(1);
});

init();
