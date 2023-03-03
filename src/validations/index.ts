import { ValidationError } from 'yup'

export type FieldError = {
  [key: string]: string
}

export const parseYupValidation = (validation: ValidationError) => {
  const errors: FieldError = {}

  if (validation.errors?.length) {
    validation.inner.forEach((error) => {
      errors[error.path!] = error.message
    })
  }

  return errors
}
