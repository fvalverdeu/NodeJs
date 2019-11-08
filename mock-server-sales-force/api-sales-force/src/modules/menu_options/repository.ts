import { MenuOption } from './model'
import menuoption from './data/menuoption.data.json'

export default class {
  async findByParam(country: string, query: any) {
    const { role, application } = query


  }

  async findProfileByUserNameUserSac(
    country: string,
    query: any
  ): Promise<MenuOption> {
    try {
      const { role, application } = query
      const parameters = [
        { name: 'country', value: country },
        { name: 'role', value: role },
        { name: 'application', value: application },
      ]
      return new Promise(resolve => {
        resolve(
          menuoption.find(
            c =>
              c.role === parameters[0].value
          )
        )
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
