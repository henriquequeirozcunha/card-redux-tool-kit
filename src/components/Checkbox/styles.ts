import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
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

    border: 2px solid ${theme.colors.primary};

    position: absolute;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0.5rem;
      height: 1rem;

      left: 0.9rem;
      top: 0.7rem;

      border: solid ${theme.colors.primary};
      border-width: 0 0.3rem 0.3rem 0;
      transform: translate(-50%, -50%) rotate(45deg);
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
