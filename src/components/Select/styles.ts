import styled, { css, DefaultTheme } from 'styled-components'
import { lighten } from 'polished'

type WrapperProps = { span: string }

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, span }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: relative;

    ${span &&
    css`
      grid-column: ${`span ${span}`};
    `}
  `}
`

export const Title = styled.div`
  ${({ theme }) =>
    css`
      cursor: pointer;
      z-index: ${theme.layers.alwaysOnTop};
    `}
`

const contentModifiers = {
  open: (theme: DefaultTheme) => css`
    opacity: 1;

    pointer-events: all;
    transform: translateY(4rem);
    z-index: ${theme.layers.menu};
  `,
  close: (theme: DefaultTheme) => css`
    opacity: 0;

    pointer-events: none;
    transform: translateY(0);
    z-index: ${theme.layers.base};
  `
}

export const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    position: absolute;
    background-color: ${theme.colors.white};

    transition: all 0.3s;

    ul {
      list-style: none;
    }

    ${isOpen ? contentModifiers.open(theme) : contentModifiers.close(theme)}
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background: ${lighten(0.8, 'black')};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    width: 2rem;
    height: 2rem;
  `}
`

export const RemoveIconWrapper = styled(IconWrapper)`
  ${({ theme }) => css`
    cursor: pointer;
  `}
`
export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    display: flex;
  `}
`
export const SelectedItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
  `}
`
export const SelectedItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    padding: 0.5rem;
  `}
`
