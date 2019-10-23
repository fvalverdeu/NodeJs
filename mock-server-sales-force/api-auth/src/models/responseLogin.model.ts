/* eslint-disable-next-line @typescript-eslint/camelcase */
export interface ResponseLogin {
  title: string
  type: number
  detail: {
    accessToken: string
    refreshToken: string
    name: string
    role: string
    country: string
  }
  invalidparams: {}
}
