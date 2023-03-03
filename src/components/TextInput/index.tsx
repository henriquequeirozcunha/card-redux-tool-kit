import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type TextInputProps = {
  property: string
  label: string
  span?: string | undefined
  onInputChange: (value: string) => void
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  property,
  label,
  span = '3',
  onInputChange,
  error,
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setValue(newValue)

    onInputChange && onInputChange(e.target.value)
  }

  return (
    <S.Wrapper hasError={!!error} span={span}>
      <S.Input
        type="text"
        name={property}
        onChange={onChange}
        value={value}
        hasContent={!!value}
        {...props}
      />
      {label && <S.Label htmlFor={property}>{label}</S.Label>}
    </S.Wrapper>
  )
}
export default TextInput
