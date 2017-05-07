import { getUsers } from '../service/userService'
import { getOAuthToken } from '../service/weixinService'

export const get = async ctx => {
    const users = await getUsers(1)
    const data = await getOAuthToken()
    ctx.body = { data, params: ctx.params, users: users, time: Date.now() }
}

export const post = ctx => {
    ctx.body = '[POST]: /user'
}

export const put = ctx => {
    ctx.body = '[PUT]: /user'
}
