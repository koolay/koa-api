import Router from 'koa-router'
import * as userCtl from '../controller/userController'

const adminRouter = new Router()
adminRouter.get('/user', userCtl.getUserInfo)

export default adminRouter