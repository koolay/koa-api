'use strict'
const chalk = require('chalk')
const winston = require('winston')
const Sentry = require('winston-sentry')

const STATUS_COLORS = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'green'
}

export default function (options) {
    const transport = options.transport || 'console'
    const level = options.level || 'info'
    const sentryDsn = options.dsn || ''
    const tags = { app: options.name || 'koa-api' }
    const consoleTransport = new winston.transports.Console({level: level, tags})
    const transports = [consoleTransport]
    if (transport == 'sentry') {
        const sentryTransport = new Sentry({
            level: level,
            dsn: sentryDsn,
            tags: tags
        })
        transports.push(sentryTransport)
    }
    const winstonLogger = new winston.Logger({
        transports: transports
    })
    return async (ctx, next) => {
        ctx.logger = winstonLogger
        const start = new Date()
        try {
            await next()
        } catch (e) {
            throw e
        } finally {
            const ms = new Date() - start
            let logLevel

            if (ctx.status >= 500) {
                logLevel = 'error'
            } else if (ctx.status >= 400) {
                logLevel = 'warn'
            } else if (ctx.status >= 100) {
                logLevel = 'debug'
            }

            if (transport === 'console') {
                let msg = (chalk.gray(`${ctx.method} ${ctx.originalUrl}`) +
                   chalk[STATUS_COLORS[logLevel]](` ${ctx.status} `) +
                   chalk.gray(`${ms}ms`))
                ctx.logger.log(logLevel, msg)
            }
        }
    }
}
