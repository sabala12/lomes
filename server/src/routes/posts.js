import Controller from '../controllers/postsController.js'

module.exports = [
        {
                method: 'GET',
                path:   '/api/posts_desc',
                options: {
                },
                handler: Controller.getDescsByTags
        },
        {
                method: 'GET',
                path:   '/api/post',
                options: {
                },
                handler: Controller.getPostsByName
        },
]
