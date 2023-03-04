import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  span: string | undefined
  hasError?: boolean
}

const wrapperModifiers = {
  withSpan: (span: string) => css`
    grid-column: ${`span ${span}`};
  `,
  fullWidth: () => css`
    grid-column: 1 / -1;
  `,
  withError: (theme: DefaultTheme) => css`
    border: 1px solid red;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, span, hasError }) => css`
    position: relative;
    width: 100%;

    ${span && span === 'full' && wrapperModifiers.fullWidth()}
    ${span && span !== 'full' && wrapperModifiers.withSpan(span)}
    ${hasError && wrapperModifiers.withError(theme)}
  `}
`

export const Input = styled.input<{ hasContent?: boolean }>`
  ${({ theme, hasContent }) => css`
    padding: ${theme.spacings.xxsmall};
    width: 100%;

    &:focus ~ ${Label}, &:hover ~ ${Label} {
      top: -0.1rem;
      opacity: 1;
      left: 0.5rem;
      font-size: 1.2rem;
      background-color: white;
    }

    ${hasContent &&
    css`
      & ~ ${Label} {
        top: -0.1rem;
        opacity: 1;
        left: 0.5rem;
        font-size: 1.2rem;
        background-color: white;
      }
    `}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    pointer-events: none;

    opacity: 0.5;
    background-color: transparent;
    left: 1.1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in;
  `}
`
