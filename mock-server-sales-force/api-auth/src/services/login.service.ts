import LoginRepository from '../repositories/login.repository'
import { LoginModel } from '../models/login.model'
import { RequestLogin } from 'src/models/RequestLogin.model'

const repository = new LoginRepository()

export default class {
  async login(RequestLogin: RequestLogin): Promise<LoginModel[]> {
    const data = await repository.login(RequestLogin)
    return data
  }
}
