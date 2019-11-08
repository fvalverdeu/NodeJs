export interface MenuOption {
  description: string
  creation_date: string
  update_date: string
  option_type: string
  role: string[]
  active: boolean
  sub_option: SubOption[]
}

export class SubOption {
  description: string
  application: string
  role: string[]
  // url: string
}
