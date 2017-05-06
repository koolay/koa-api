import Router from 'koa-router'
import userRouter from './user'

const apiRouter = new Router({
    prefix: '/api'
})

const reg = function (router) {
    apiRouter.use('', router.routes(), router.allowedMethods())
}

// register routes
reg(userRouter)

export default apiRouter
