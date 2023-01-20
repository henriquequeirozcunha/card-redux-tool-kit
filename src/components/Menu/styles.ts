import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid red;
    color: ${theme.colors.white};

    padding: ${theme.spacings.small};
  `}
`

export const CartWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 3rem;
    height: 3rem;

    position: relative;
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 5rem;
    height: 5rem;
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css``}
`

export const Menu = styled.h1`
  ${({ theme }) => css``}
`

export const ItemsAmount = styled.span`
  ${({ theme }) => css`
    position: absolute;
    font-size: ${theme.font.sizes.xsmall};
    background-color: ${theme.colors.primary};
    border-radius: 50%;

    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
