import * as userService from '../service/userService'

export const get = async ctx => {
    const users = await userService.getUsers(1)
    ctx.body = { params: ctx.params, users: users, time: Date.now() }
}

export const post = ctx => {
    ctx.body = '[POST]: /user'
}

export const put = ctx => {
    ctx.body = '[PUT]: /user'
}
