'use strict'
const chalk = require('chalk')
const winston = require('winston')
const Sentry = require('winston-sentry')

const STATUS_COLORS = {
    error: 'red',
    warn: 'yellow',
    info: 'green'
}

export default function (options) {
    const transport = options.transport || 'console'
    const level = options.level || 'info'
    const sentryDsn = options.dsn || ''
    return async (ctx, next) => {
        const consoleTransport = new winston.transports.Console({level: level})
        const transports = [consoleTransport]
        if (transport == 'sentry') {
            const sentryTransport = new Sentry({
                patchGlobal: true,
                level: level,
                dsn: sentryDsn,
                tags: { app: options.name || 'koa-api' }
            })
            transports.push(sentryTransport)
        }
        const winstonLogger = new winston.Logger({
            transports: transports
        })
        ctx.logger = winstonLogger
        const start = new Date()
        await next()
        const ms = new Date() - start

        let logLevel
        if (ctx.status >= 500) {
            logLevel = 'error'
        } else if (ctx.status >= 400) {
            logLevel = 'warn'
        } else if (ctx.status >= 100) {
            logLevel = 'debug'
        }

        let msg = (chalk.gray(`${ctx.method} ${ctx.originalUrl}`) +
               chalk[STATUS_COLORS[logLevel]](` ${ctx.status} `) +
               chalk.gray(`${ms}ms`))

        ctx.logger.log(logLevel, msg)
    }
}
