import Repository from './repository'

const repository = new Repository()

export default class {
  async findByParam(country: string, query: any) {
    return await repository.findByParam(country, query)
  }
}
