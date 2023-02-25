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

    width: 3rem;
    height: 3rem;

    border: 5px solid ${theme.colors.primary};
    border-radius: 50%;

    position: absolute;

    &::after {
      content: '';
      display: block;

      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary};

      position: absolute;
      top: 50%;
      left: 50%;
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
