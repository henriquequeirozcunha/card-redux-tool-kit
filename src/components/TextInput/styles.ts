import styled, { css } from 'styled-components'

type WrapperProps = {
  span: string | undefined
}

const wrapperModifiers = {
  withSpan: (span: string) => css`
    grid-column: ${`span ${span}`};
  `,
  fullWidth: () => css`
    grid-column: 1 / -1;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, span }) => css`
    position: relative;
    width: 100%;

    ${span && span === 'full' && wrapperModifiers.fullWidth()}
    ${span && span !== 'full' && wrapperModifiers.withSpan(span)}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    width: 100%;

    &:focus ~ label,
    &:hover ~ label {
      top: -1rem;
      opacity: 1;
      left: 0.5rem;
    }
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
