import { MenuOption } from './model'
import menuoption from './data/menuoption.data.json'

export default class {
  async findByParam(country: string, query: any): Promise<MenuOption[]> {
    try {
      const { role, application } = query
      const parameters = [
        { name: 'country', value: country },
        { name: 'role', value: role },
        { name: 'application', value: application },
      ]
      return new Promise(resolve => {
        resolve(
          menuoption.filter(
            c =>
              // c.role === parameters[1].value
              c.active === true
          )
        )
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
