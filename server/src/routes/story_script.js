module.exports = {

        method: 'GET',
        path:   '/story_script',
        options: {
        },
        handler: async (request) => {

                let { redis } = request.server.app

                return await redis.get('lans')
        }
}
