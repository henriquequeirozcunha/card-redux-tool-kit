import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react'
import * as S from './styles'
import InputMask from 'react-input-mask'
import { ErrorWrapper } from 'components/ErrorWrapper'

export type TextInputProps = {
  name: string
  label: string
  mask?: string
  span?: string | undefined
  onInputChange?: (value: string) => void
  onInputBlur?: (value: string) => void
  error?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput: React.ForwardRefRenderFunction<
  S.WrapperProps,
  TextInputProps
> = (
  {
    name,
    label,
    mask,
    span = '3',
    error,
    onInputChange,
    onInputBlur,
    onChange,
    onBlur,
    initialValue,
    ...props
  },
  ref
) => {
  const [currentValue, setCurrentValue] = useState(initialValue)

  useEffect(() => {
    setCurrentValue(initialValue)
  }, [initialValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setCurrentValue(newValue)

    onChange && onChange(e)
    onInputChange && onInputChange(newValue)
  }

  const handleInputBlur = (e: any) => {
    onBlur && onBlur(e)
    onInputBlur && onInputBlur(currentValue as string)
  }

  return (
    <S.Wrapper hasError={!!error} span={span} ref={ref}>
      <S.InputWrapper hasError={!!error}>
        {mask ? (
          <InputMask
            {...props}
            mask={mask}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            // value={currentValue}
          >
            {() => (
              <S.Input
                hasContent={!!currentValue}
                type="text"
                name={name}
                {...props}
              />
            )}
          </InputMask>
        ) : (
          <S.Input
            hasContent={!!currentValue}
            type="text"
            name={name}
            {...props}
            onChange={handleInputChange}
          />
        )}

        {label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>
      <ErrorWrapper>{error && <span>{error}</span>}</ErrorWrapper>
    </S.Wrapper>
  )
}
export default forwardRef(TextInput)
