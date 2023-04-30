import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
  `}
`

export const Button = styled.span`
  ${({ theme }) => css`
    display: inline-block;

    width: 2rem;
    height: 2rem;

    border: 3px solid ${theme.colors.primary};
    border-radius: 50%;

    position: absolute;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1rem;
      height: 1rem;

      left: 50%;
      top: 50%;

      border-radius: 50%;
      background-color: ${theme.colors.primary};

      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.2s;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) =>
    css`
      display: none;

      &:checked ~ ${Label} ${Button}::after {
        opacity: 1;
      }
    `}
`

export const Span = styled.div`
  ${({ theme }) => css`
    margin-left: 3.5rem;
  `}
`

export const Background = styled.div`
  ${({ theme }) => css``}
`
