import Router from 'koa-router'

import LoginController from '../controllers/login.controller'

const controller = new LoginController()
const router = new Router({ prefix: '/auth' })

router.post('auth/login', '/login', controller.login)
router.get('auth/getdata', '/getdata', controller.findAll)

export default router
