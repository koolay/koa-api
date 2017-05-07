import Router from 'koa-router'
import * as UserCtrl from '../controller/userController'

const router = new Router()

router.get('/user/list/:page', UserCtrl.get)

export default router
