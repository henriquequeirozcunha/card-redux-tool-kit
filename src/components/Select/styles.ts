import styled, { css, DefaultTheme } from 'styled-components'
import { lighten } from 'polished'

type WrapperProps = { span: string }

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, span }) => css`
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */

    position: relative;

    ${span &&
    css`
      grid-column: ${`span ${span}`};
    `}
  `}
`

type TitleProps = {
  title_position?: 'top' | 'float'
}

export const Title = styled.label<TitleProps>`
  ${({ theme }) => css`
    position: absolute;
    pointer-events: none;

    opacity: 0.5;
    background-color: transparent;
    left: 1.1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in;

    font-size: ${theme.font.sizes.xsmall};
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
    width: max-content;
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
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
  `}
`

export const UnSelectIconWrapper = styled(IconWrapper)`
  ${({ theme }) => css`
    cursor: pointer;
  `}
`

export const ClearFilterIconWrapper = styled(IconWrapper)`
  ${({ theme }) => css`
    cursor: pointer;

    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: 1rem;

    background-color: ${theme.colors.lightGray};

    display: flex;
  `}
`
type InputProps = {
  hasContent?: boolean
}

export const InputWrapper = styled.div<InputProps>`
  ${({ theme, hasContent }) => css`
    border: 2px solid ${theme.colors.lightGray};

    height: 100%;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    min-height: 3rem;
    background-color: white;

    &:active > ${Title}, &:focus > ${Title}, &:hover > ${Title} {
      top: -0.1rem;
      opacity: 1;
      left: 0.5rem;
      font-size: 1.2rem;
      background-color: white;
    }

    ${hasContent &&
    css`
      & > ${Title} {
        top: -0.1rem;
        opacity: 1;
        left: 0.5rem;
        font-size: 1.2rem;
        background-color: white;
      }
    `}
  `}
`
export const SelectedItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css``}
`
