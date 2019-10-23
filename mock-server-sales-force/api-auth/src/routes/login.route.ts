import Router from 'koa-router'

import LoginController from '../controllers/login.controller'

const controller = new LoginController()
const router = new Router({ prefix: '/auth' })

router.post('auth/login', '/', controller.login)

export default router
