import Repository from './repository'

const repository = new Repository()

export default class {
  async findCurrentCampaignUA(country: string, query: any) {
    return await repository.findCurrentCampaignUA(country, query)
  }
}
