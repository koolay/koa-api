import Router from 'koa-router'

import * as publicCtrl from '../controller/publicController'

const router = new Router()

router.get('/hello', publicCtrl.hello)

export default router