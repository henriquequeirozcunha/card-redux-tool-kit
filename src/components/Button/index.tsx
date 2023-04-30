import { Spinner } from 'components/Spinner'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element
  as?: React.ElementType
  loading?: boolean
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, icon, loading, ...props },
  ref
) => (
  <S.Wrapper hasIcon={!!icon} ref={ref} {...props}>
    {loading ? (
      <S.LoadingSpinnerWrapper>
        <Spinner />
      </S.LoadingSpinnerWrapper>
    ) : (
      <>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
      </>
    )}
  </S.Wrapper>
)

export default forwardRef(Button)
