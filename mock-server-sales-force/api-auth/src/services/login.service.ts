import LoginRepository from '../repositories/login.repository'
import { LoginModel } from '../models/login.model'
import { RequestLoginModel } from 'src/models/request-login.model'

const repository = new LoginRepository()

export default class {
  async login(requestLoginModel: RequestLoginModel): Promise<any> {
    const data = await repository.login(requestLoginModel)
    return data
  }

  async findAll(): Promise<LoginModel[]> {
    const data = await repository.findAll()
    return data
  }
}
