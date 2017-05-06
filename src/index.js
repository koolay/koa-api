import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import helmet from 'koa-helmet'
import Raven from 'raven'
import winston from 'winston'
import logger from './middleware/logger'

import errorMiddleware from './middleware/error'

import router from './routes'

import conf from './conf'

const app = new Koa()

// Register middleware
const loggerOptions = {
    name: conf.get('appName'),
    level: conf.get('logLevel'),
    transport: conf.get('logTransport'),
    dsn: conf.get('logSentryDsn')
}
app
  .use(logger(loggerOptions))
  .use(errorMiddleware())
  .use(bodyParser())
  .use(helmet())
  .use(router())

// sentry logging
Raven.config(conf.get('logSentryDsn')).install()
app.on('error', err => {
    if (conf.get('logTransport') === 'sentry') {
        Raven.captureException(err)
    }
})

const port = conf.get('port')
const env = conf.get('env')
winston.info('current environment: %s', env)
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))
