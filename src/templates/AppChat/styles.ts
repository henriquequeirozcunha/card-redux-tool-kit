import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
  `}
`

export const Header = styled.div`
  ${({ theme }) =>
    css`
      min-height: 4rem;
      background-color: ${darken(0.4, theme.colors.primary)};
    `}
`

export const MainContent = styled.div`
  ${({ theme }) => css`
    height: 100vh;

    display: grid;
    grid-template-columns: 8rem 18rem 1fr;
  `}
`

export const NamespacesWrapper = styled.div`
  ${({ theme }) =>
    css`
      background-color: ${darken(0.3, theme.colors.primary)};
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      padding: 2rem 0;
    `}
`

export const RoomsWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${darken(0.4, theme.colors.primary)};
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `}
`

type RoomWrapperProps = {
  selected?: boolean
}

export const RoomWrapper = styled.div<RoomWrapperProps>`
  ${({ theme, selected = false }) => css`
    padding: 1rem;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    cursor: pointer;

    &:hover {
      background-color: ${darken(0.2, theme.colors.primary)};
    }

    ${selected &&
    css`
      background-color: ${darken(0.2, theme.colors.primary)};
    `}
  `}
`

export const HistoryWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
  `}
`

export const NamespaceIconWrapper = styled.img`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    padding: 0.5rem;

    border-radius: ${theme.border.radius};

    &:hover {
      background-color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`
