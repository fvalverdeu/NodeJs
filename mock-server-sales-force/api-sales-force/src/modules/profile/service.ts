import Repository from './repository'

const repository = new Repository()

export default class {
  async findProfileByUserName(country: string, query: any) {
    const resultado = await repository.findProfileByUserNameUserSac(
      country,
      query
    )
    return resultado
  }

  async findProfileByUA(country: string, query: any) {
    const resultado = await repository.findProfileByUASac(
      country,
      query
    )
    return resultado
  }
}
