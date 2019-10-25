import Router from 'koa-router';

import Controller from './controller';

const controller = new Controller();
const router = new Router({ prefix: '/sac' });

router.get('sac/country/list', '/country/list', controller.listCountry);
router.get('sac/country/', '/country/:iso', controller.findByIsoCountry);
router.get('sac/profile/list', '/profile/list', controller.listProfile);
router.get('sac/region/list', '/region/list', controller.listRegion);
router.get('sac/region/', '/region/:iso', controller.findByIsoRegion);

export default router;
