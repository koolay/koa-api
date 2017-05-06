import compose from 'koa-compose'

import apiRouter from './api'

export default () => compose([
    apiRouter.routes(),
    apiRouter.allowedMethods()
])
