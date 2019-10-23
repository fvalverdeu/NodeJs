/* eslint require-atomic-updates: 0 */

import { BaseContext } from 'koa'
import LoginService from '../services/login.service'
import { RequestLogin } from '../models/RequestLogin.model'

const service = new LoginService()
const RequestLogin = new RequestLogin()

export default class {
  async login(ctx: BaseContext): Promise<any> {
    RequestLogin.username = ctx.params.username
    RequestLogin.password = ctx.params.password
    ctx.body = await service.login(RequestLogin)
  }
}
