import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.large};

    justify-content: space-between;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css``}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background-color: red;
  `}
`
