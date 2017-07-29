/**
 *
 *  实现redis缓存客户端
 *  usage:
 *  import cache from './cache'
 *  const redis = cache.redis
 *  const obj = await redis.hgetall('someKey')
 *  const obj2 = await redis.get('someKey')
 *  await redis.set('someKey', JSON.stringify({f: 1, b: 2}), 'EX', 3600)
 *
 */

import conf from './../conf'
import redis from 'redis'
const coRedis = require('co-redis');
const options = conf.get('redis')

const client = coRedis(redis.createClient({
    host: options.host,
    port: options.port,
    db: options.db,
    prefix: options.prefix + ':'
        // password: options.password,
}));
export default client