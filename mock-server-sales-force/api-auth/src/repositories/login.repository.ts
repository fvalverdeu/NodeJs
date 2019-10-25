import data from './data.json'
import { RequestLoginModel } from '../models/request-login.model'
import { LoginModel } from 'src/models/login.model.js'

export default class {
  async findAll(): Promise<LoginModel[]> {
    return new Promise(resolve => resolve(data))
  }

  async login(requestLoginModel: RequestLoginModel): Promise<any> {
    // console.log('repository')
    return new Promise(resolve => {
      resolve(
        data.filter(c => {
          // console.log(c)
          return (
            c.username === requestLoginModel.username &&
            c.password === requestLoginModel.password
          )
        })[0]
      )
    })
  }
}
