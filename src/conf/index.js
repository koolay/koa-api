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
        default: 'KoaAPP'
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
    }

})
conf.validate({ strict: true })

export default conf
