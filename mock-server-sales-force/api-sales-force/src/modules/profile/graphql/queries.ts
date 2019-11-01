import Service from '../service'

const service = new Service()

export default {
  async ProfileByUserName(_: any, { input }: any) {
    const { country, userName, role } = input
    return await service.findProfileByUserName(country, { userName, role })
  },
  // async ProfileByUA(_: any, { input }: any) {
  //   const { country, region, zone, section } = input
  //   return await service.findProfileByZoneRegionSectionUserUAGet(country, {
  //     region,
  //     zone,
  //     section,
  //   })
  // },
}
