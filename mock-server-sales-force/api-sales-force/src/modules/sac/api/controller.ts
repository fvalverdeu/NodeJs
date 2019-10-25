/* eslint require-atomic-updates: 0 */

import { BaseContext, Context } from 'koa';
import Service from '../service';

const service = new Service();

export default class {
  async listCountry(ctx: BaseContext): Promise<any> {
    ctx.body = await service.findAllCountry();
  }

  async findByIsoCountry(ctx: Context): Promise<any> {
    const iso = ctx.params.iso
    console.log(ctx.params);
    const result = await service.findByIsoCountry(iso);

    if (result) {
      ctx.body = result;
    } else {
      ctx.throw(400, `Country ${iso} not found`);
    }
  }

  async listProfile(ctx: BaseContext): Promise<any> {
    ctx.body = await service.findAllProfile();
  }

  async listRegion(ctx: BaseContext): Promise<any> {
    ctx.body = await service.findAllRegion();
  }

  async findByIsoRegion(ctx: Context): Promise<any> {
    const iso = ctx.params.iso
    console.log(ctx.params);
    const result = await service.findByIsoRegion(iso);

    if (result) {
      ctx.body = result;
    } else {
      ctx.throw(400, `Country ${iso} not found`);
    }
  }
}
