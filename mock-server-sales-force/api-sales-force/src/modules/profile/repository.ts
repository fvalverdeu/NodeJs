import { UserProfile } from './model'
import userprofile from './data/profile.data.json'

export default class {
  async findProfileByUserNameUserSac(
    country: string,
    query: any
  ): Promise<UserProfile> {
    try {
      const { userName } = query
      const parameters = [
        { name: 'UserName', value: userName },
        { name: 'Country', value: country },
      ]
      return new Promise(resolve => {
        resolve(
          userprofile.find(
            c =>
              c.cod_user === parameters[0].value &&
              c.cod_country === parameters[1].value
          )
        )
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
