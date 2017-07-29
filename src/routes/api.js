import Router from 'koa-router'
import jwt from 'koa-jwt'
import conf from '../conf'
import adminRouter from '../modules/admin/routes'
import orderRouter from '../modules/order/routes'

const apiRouter = new Router()
apiRouter.use(jwt({
    secret: conf.get('jwtSecret'),
    debug: conf.get('debug')
}))

apiRouter.use('/admin', adminRouter.routes(), adminRouter.allowedMethods())
apiRouter.use('/order', orderRouter.routes(), orderRouter.allowedMethods())
export default apiRouter