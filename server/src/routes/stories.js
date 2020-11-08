import Joi from '@hapi/joi'
//import Boom from '@hapi/boom'

module.exports = {

        method: 'GET',
        path:   '/api/stories/{lan}',
        options: {
                validate: {
                        params: Joi.object({
                                lan:    Joi.string().required()
                        })
                }
        },
        handler: async (request) => {

                let { redis } = request.server.app

                let stories_key = request.params.lan + "_stories"

                return await redis.smembers(stories_key)
        }
}
