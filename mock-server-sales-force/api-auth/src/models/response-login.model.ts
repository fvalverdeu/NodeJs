/* eslint-disable-next-line @typescript-eslint/camelcase */
export class ResponseLoginModel {
  title: string
  type: number
  detail: Detail
  invalidparams: {}
}

export class Detail {
  accessToken: string
  refreshToken: string
  name: string
  role: string
  country: string
}
