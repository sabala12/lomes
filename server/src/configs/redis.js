import 'dotenv/config';

const redis_conf = {

        port:           process.env.REDIS_PORT,
        host:           process.env.REDIS_HOST,
        password:       process.env.REDIS_PASS,
};

export default redis_conf;
