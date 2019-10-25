import countrydata from './data/country.data.json'
import profiledata from './data/profile.data.json'
import regiondata from './data/region.data.json'
import zonedata from './data/zone1.data.json'

import { Country, Profile, Region, Zone } from './model'

export default class {
  async findAllCountry(): Promise<Country[]> {
    return new Promise(resolve => resolve(countrydata))
  }

  async findByIsoCountry(iso: string): Promise<Country> {
    return new Promise(resolve => {
      resolve(countrydata.find(c => c.codigoiso === iso))
    })
  }

  async findAllProfile(): Promise<Profile[]> {
    return new Promise(resolve => resolve(profiledata))
  }

  async findAllRegion(): Promise<Region[]> {
    return new Promise(resolve => resolve(regiondata))
  }

  async findByIsoRegion(iso: string): Promise<Region[]> {
    return new Promise(resolve => {
      resolve(
        regiondata.filter(c => {
          return c.codigoiso === iso
        })
      )
    })
  }

  async findAllZone(): Promise<Zone[]> {
    return new Promise(resolve => resolve(zonedata))
  }

  async findByRegionZone(regioncode: string): Promise<Zone[]> {
    return new Promise(resolve => {
      resolve(
        zonedata.filter(c => {
          return c.regioncode === regioncode
        })
      )
    })
  }
}
