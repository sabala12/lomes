module.exports = {

        method: 'POST',
        path:   '/create_story',
        options: {
        },
        handler: async (request) => {

                let { redis } = request.server.app

                return await redis.get('lans')
        }
}
