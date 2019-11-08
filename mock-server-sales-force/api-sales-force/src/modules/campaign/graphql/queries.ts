import Service from '../service'

const service = new Service()

export default {
  async CurrentCampaign(_: any, { input }: any) {
    const { country, codeRegion, codeZone, codeRole } = input
    return await service.findCurrentCampaignUA(country, {
      codeRegion,
      codeZone,
      codeRole,
    })
  },
}
