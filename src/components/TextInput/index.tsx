import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type TextInputProps = {
  property: string
  label: string
  span?: string | undefined
  onInputChange: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  property,
  label,
  span = '3',
  onInputChange,
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setValue(newValue)

    onInputChange && onInputChange(e.target.value)
  }

  return (
    <S.Wrapper span={span}>
      <S.Input
        type="text"
        name={property}
        onChange={onChange}
        value={value}
        {...props}
      />
      {label && <S.Label htmlFor={property}>{label}</S.Label>}
    </S.Wrapper>
  )
}
export default TextInput
