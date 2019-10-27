import Router from 'koa-router'

import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/sac' })

router.get('sac/country/list', '/country/list', controller.listCountry)
router.get('sac/country/', '/country/:iso', controller.findByIsoCountry)
router.get('sac/profile/list', '/profile/list', controller.listProfile)
router.get('sac/region/list', '/region/list', controller.listRegion)
router.get('sac/region/', '/region/:iso', controller.findByIsoRegion)
router.get('sac/zone/list', '/zone/list', controller.listZone)
router.get('sac/zone/', '/zone/:iso&:coderegion', controller.findByRegionZone)

export default router
