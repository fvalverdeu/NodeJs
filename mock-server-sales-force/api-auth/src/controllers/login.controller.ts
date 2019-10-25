/* eslint require-atomic-updates: 0 */

import { BaseContext, Context } from 'koa'
import LoginService from '../services/login.service'
import { RequestLoginModel } from '../models/request-login.model'
import { ResponseLoginModel } from '../models/response-login.model'

const service = new LoginService()
const requestLoginModel = new RequestLoginModel()

export default class {
  async login(ctx: Context): Promise<any> {
    requestLoginModel.username = ctx.request.body.username
    requestLoginModel.password = ctx.request.body.password

    const data = await service.login(requestLoginModel)

    const result = {
      title: "User valid",
      type: 200,
      detail: {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        name: data.username,
        role: data.role,
        country: data.country
      },
      invalidparams: ''
    }
    console.log(result)
    ctx.body = result;
  }

  async findAll(ctx: BaseContext): Promise<any> {
    // console.log(ctx)
    ctx.body = await service.findAll()
  }
}
