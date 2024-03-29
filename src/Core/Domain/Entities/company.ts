export type Company = {
  id: string
  company_name: string
  trading_name: string
  cnpj: string
  cep: string
  address_name: string
  address_number: string
  address_state: string
  address_district: string
  address_complement?: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
  suspended?: boolean
}
