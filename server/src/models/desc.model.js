const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Desc = new Schema({

        _id: {
                required: true,
                type: String
        },

	name: {
		required: true,
		type: String
	},
	
        tags: {
		require: true,
                type: [String]
	},
});

module.exports = mongoose.model('descs', Desc);
