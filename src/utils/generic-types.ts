import { FilterGroup } from 'components/ProductFilters'

export type KeyValueObject = {
  [key: string]:
    | string
    | string[]
    | boolean
    | number
    | Record<string, unknown>
    | undefined
}
