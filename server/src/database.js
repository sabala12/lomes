import {MongoClient} from 'mongodb';

module.exports = async () => {

	let url = 'mongodb://localhost:27017';
	
        const client = new MongoClient(url);

        try {
		// Connect to the MongoDB cluster
		await client.connect();

	} catch (e) {
                console.error(e)
        }

	return client;
};
