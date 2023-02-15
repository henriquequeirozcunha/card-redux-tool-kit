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

    min-height: 20rem;

    background-color: white;
    clip-path: polygon(0 0, 100% 3rem, 100% 100%, 0 100%);
  `}
`

export const FooterContent = styled.div`
  ${({ theme }) => css`
    padding: 0 3rem;
    flex: 1;
    margin-top: 3rem;
    display: grid;
    justify-items: center;

    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  `}
`
