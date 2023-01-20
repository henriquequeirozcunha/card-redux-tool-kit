import styled, { css } from 'styled-components'

type ContainerProps = {
  IsOpen: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    //transform: translateX(-30rem);
  `}
`

export const Container = styled.div<ContainerProps>`
  ${({ theme, IsOpen }) => css`
    position: relative;
    transform: ${IsOpen ? 'translateX(0)' : 'translateX(-26rem)'};
    transition: all 0.3s ease-in;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const FloatButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    position: absolute;
    left: 27rem;
    top: 3rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 25rem;
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.small};
  `}
`

export const Navbar = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.large};
    color: ${theme.colors.white};
  `}
`

export const ListGroup = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `}
`
export const ListName = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    outline: 0;
  `}
`

export const LinkItem = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    padding: ${theme.spacings.small};
    display: inline-block;

    padding: 1rem 3rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    position: relative;

    ::after {
      position: absolute;
      content: '';
      width: 0;
      left: 0;
      bottom: 0;
      border-bottom: 3px solid transparent;
      transition: all 0.2s ease;
    }

    &:hover {
      ::after {
        width: 100%;
        border-bottom: 3px solid ${theme.colors.primary};
      }
    }
  `}
`
