import conf from './../conf'
let MongoClient = require('mongodb').MongoClient

const masterOptions = conf.get('masterDb')
const mongodbUrl = conf.get('mongodbUrl')

const master = require('knex')({
    client: 'mysql',
    connection: {
        host: masterOptions.host,
        port: masterOptions.port,
        user: masterOptions.user,
        password: masterOptions.password,
        database: masterOptions.database,
        charset: 'utf8mb4'
    },
    pool: { min: 0, max: masterOptions.connectionLimit },
    // 是否打印sql语句. !!生产环境下设置关闭
    debug: conf.get('debug')
})

const mongo = async collection => {
    const _mongo = await MongoClient.connect(mongodbUrl)
    return _mongo.collection(collection)
}

export default {
    master,
    mongo
}