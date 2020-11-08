const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
        _id: {
                required: true,
                type: String
        },

        name: {
                required: true,
                type: String
        },

	markdown: {
		required: true,
		type: String
	},
});

module.exports = mongoose.model('posts', Post);
