import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-self: center;

    width: 90%;
  `}
`
export const ProductsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  `}
`
