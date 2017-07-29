import Router from 'koa-router'
import * as searchCtl from '../controller/searchController'

const orderRouter = new Router()
orderRouter.get('/detail', searchCtl.getDetail)

export default orderRouter