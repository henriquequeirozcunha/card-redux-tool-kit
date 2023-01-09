import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    min-height: 20rem;
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const Header = styled.div`
  ${({ theme }) => css``}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    align-self: center;
    height: 20rem;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    display: flex;
    justify-content: center;
  `}
`
