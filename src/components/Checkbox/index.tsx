import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type CheckboxProps = {
  label: string
  labelFor: string
  isChecked?: boolean
  onCheck: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label = 'Label',
  labelFor = 'label',
  isChecked = false,
  onCheck,
  ...inputProps
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleCheck = () => {
    const checkStatus = !checked

    setChecked(checkStatus)

    onCheck && onCheck(checkStatus)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        checked={checked}
        onChange={() => handleCheck()}
        {...inputProps}
      />

      <S.Label htmlFor={labelFor}>
        <S.Button></S.Button>
        <S.Span>{label}</S.Span>
      </S.Label>
    </S.Wrapper>
  )
}

export default Checkbox
