import data from './data.json'
import { RequestLogin } from '../models/RequestLogin.model'
import { LoginModel } from 'src/models/login.model.js'

export default class {
  async findAll(): Promise<RequestLogin[]> {
    return new Promise(resolve => resolve(data))
  }

  async login(RequestLogin: RequestLogin): Promise<LoginModel[]> {
    return new Promise(resolve => {
      resolve(
        data.filter(
          c =>
            c.username === RequestLogin.username &&
            c.password === RequestLogin.password
        )
      )
    })
  }
}
