import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;

    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 0 ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    justify-content: center;
  `}
`

type RowProps = {
  cols?: number
}
