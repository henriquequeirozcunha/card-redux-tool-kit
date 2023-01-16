import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;

    justify-content: space-between;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css``}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    margin-top: ${theme.spacings.large};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`
