import Service from '../service'

const service = new Service()

export default {
  async Options(_: any, { input }: any) {
    const { country, role, application } = input
    return await service.findByParam(country, { role, application })
  },
}
