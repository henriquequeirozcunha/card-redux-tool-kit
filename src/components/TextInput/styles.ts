import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};

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
