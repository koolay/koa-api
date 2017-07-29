import compose from 'koa-compose'
import Router from 'koa-router'

import apiRouter from './api'
import publicRouter from './public'
const rootRouter = new Router()
rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
rootRouter.use('/public', publicRouter.routes(), publicRouter.allowedMethods())
export default () => compose([
    rootRouter.routes(),
    rootRouter.allowedMethods()
])