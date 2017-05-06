import { getUsers } from '../service/user'

export const get = ctx => {
    ctx.logger.error('test error log', { extra: 11 })
    ctx.body = { params: ctx.params, users: getUsers(), time: Date.now() }
}

export const post = ctx => {
    ctx.body = '[POST]: /user'
}

export const put = ctx => {
    ctx.body = '[PUT]: /user'
}
