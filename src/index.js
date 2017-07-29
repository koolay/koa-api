import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import helmet from 'koa-helmet'
import Raven from 'raven'
import winston from 'winston'
// middleware
import logger from './middleware/logger'
import requestId from './middleware/request-id'
import errorMiddleware from './middleware/error'
import validator from './middleware/validator'

import router from './routes'

import conf from './conf'

const app = new Koa()

// sentry logging
Raven.config(conf.get('logSentryDsn')).install()
app.on('error', err => {
    if (conf.get('logTransport') === 'sentry') {
        Raven.captureException(err)
    } else {
        console.log(err)
    }
})
app.use(requestId()).use(logger({
    name: conf.get('appName'),
    level: conf.get('logLevel'),
    transport: conf.get('logTransport'),
    dsn: conf.get('logSentryDsn')
}))
app
    .use(errorMiddleware())
    .use(validator())
    .use(bodyParser())
    .use(helmet())
    .use(router())
const port = conf.get('port')
const env = conf.get('env')
winston.info('current environment: %s', env)
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))