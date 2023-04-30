import { v4 as uuidv4 } from 'uuid'

export const delay = (duration = 500) =>
  new Promise((resolve) => setTimeout(resolve, duration))

export const generateUniqueId = (): string => {
  return uuidv4()
}
