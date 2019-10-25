export class Country {
  paisid: number
  codigoiso: string
  nombre: string
}

export class Profile {
  idprofile: number
  codprofile: string
  description: string
  idlevel: number
}

export class Region {
  idregion: number
  codigo: string
  codigoiso: string
}

export class Zone {
  idzone: number
  code: string
  regionid: number
  regioncode: string
}
