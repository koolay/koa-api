import mysql from 'mysql2/promise'
import conf from './../conf'

const masterOptions = conf.get('masterDb')
const pools = {}

pools['master'] = mysql.createPool({
    host: masterOptions.host,
    user: masterOptions.user,
    password: masterOptions.password,
    database: masterOptions.database,
    connectionLimit: masterOptions.connectionLimit
})

export default {
    get (db) {
        return pools[db]
    },
    get master () {
        return pools['master']
    }
}
