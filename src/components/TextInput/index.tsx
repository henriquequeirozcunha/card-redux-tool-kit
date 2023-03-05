import { forwardRef, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextInputProps = {
  name: string
  label: string
  span?: string | undefined
  onInputChange?: (value: string) => void
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput: React.ForwardRefRenderFunction<
  S.WrapperProps,
  TextInputProps
> = (
  { name, label, span = '3', error, onInputChange, onChange, ...props },
  ref
) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setValue(newValue)

    onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper hasError={!!error} span={span} ref={ref}>
      <S.InputWrapper hasError={!!error}>
        <S.Input
          hasContent={!!value}
          type="text"
          name={name}
          {...props}
          onChange={(e) => {
            handleInputChange(e)
            onChange && onChange(e)
          }}
        />
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>
      <S.ErrorWrapper>{error && <span>{error}</span>}</S.ErrorWrapper>
    </S.Wrapper>
  )
}
export default forwardRef(TextInput)
