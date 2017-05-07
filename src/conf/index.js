import convict from 'convict'
import dotenv from 'dotenv'
dotenv.config({ silent: true })

const conf = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    appName: {
        default: 'koa-api',
        env: 'APP_NAME'
    },
    port: {
        doc: 'The port for http.',
        format: 'port',
        default: 4000,
        env: 'PORT'
    },
    logLevel: {
        env: 'LOG_LEVEL',
        default: 'info',
        format: ['debug', 'info', 'warn', 'error']
    },
    logTransport: {
        env: 'LOG_TRANSPORT',
        default: 'console',
        format: ['console', 'sentry']
    },
    logSentryDsn: {
        env: 'LOG_SENTRY_DSN',
        default: ''
    },
    masterDb: {
        host: { env: 'DB_MASTER_HOST', default: '127.0.0.1' },
        user: { env: 'DB_MASTER_USER', default: 'root' },
        password: { env: 'DB_MASTER_PWD', default: 'dev' },
        database: 'koa',
        connectionLimit: 10
    }
})
conf.validate({ strict: true })

export default conf
