import styled, { css, DefaultTheme, keyframes } from 'styled-components'

export type WrapperProps = {
  span: string | undefined
}

const wrapperModifiers = {
  withSpan: (span: string) => css`
    grid-column: ${`span ${span}`};
  `,
  fullWidth: () => css`
    grid-column: 1 / -1;
  `,
  withError: (theme: DefaultTheme) => css`
    /* border: 1px solid red; */
    animation-name: ${shakeAniamtion};
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  `
}

const shakeAniamtion = keyframes`
 0% { transform: translateX(5px); };
 25% { transform: translateX(-5px); };
 75% { transform: translateX(5px); };
 100% { transform: translateX(0); };
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, span }) => css`
    width: 100%;

    ${span && span === 'full' && wrapperModifiers.fullWidth()}
    ${span && span !== 'full' && wrapperModifiers.withSpan(span)}
  `}
`

type InputWrapperProps = {
  hasError?: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, hasError }) => css`
    position: relative;

    width: 100%;

    ${hasError && wrapperModifiers.withError(theme)}
  `}
`

type InputProps = {
  hasContent?: boolean
}

export const Input = styled.input<InputProps>`
  ${({ theme, hasContent }) => css`
    padding: ${theme.spacings.xxsmall};
    width: 100%;

    &:active ~ ${Label}, &:focus ~ ${Label}, &:hover ~ ${Label} {
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
export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    color: red;

    span {
      font-size: 1.2rem;
    }
  `}
`
