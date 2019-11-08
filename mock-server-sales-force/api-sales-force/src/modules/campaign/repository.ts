import { CurrentCampaign } from './model'
import campaign from './data/campaign.data.json'

export default class {
  async findCurrentCampaignUA(
    country: string,
    query: any
  ): Promise<CurrentCampaign> {
    try {
      const { coderegion, codezone, role } = query
      const parameters = [
        { name: 'codpais', value: country },
        { name: 'codregion', value: coderegion },
        { name: 'codzona', value: codezone },
        { name: 'codrole', value: role },
      ]
      return new Promise(resolve => {
        resolve(
          campaign.find(
            c =>
              // c.role === parameters[1].value
              c.current_campaign === '201915'
          )
        )
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
