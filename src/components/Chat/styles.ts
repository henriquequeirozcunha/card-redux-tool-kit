import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'

type CollapsedProps = {
  isCollapsed?: boolean
}

export const Wrapper = styled.main<CollapsedProps>`
  ${({ theme, isCollapsed }) => css`
    display: flex;
    flex-direction: column;

    width: 30rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    background-color: ${theme.colors.lightGray};

    ${!isCollapsed &&
    css`
      min-height: 30rem;
    `}
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxsmall};

    padding: ${theme.spacings.xxsmall};

    background-color: ${theme.colors.primary};
  `}
`
export const DropdownActionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.white};
  `}
`

export const Content = styled.div<CollapsedProps>`
  ${({ theme, isCollapsed }) => css`
    flex: 1;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-height: 30rem;
    overflow-y: scroll;

    ${isCollapsed &&
    css`
      display: none;
    `}
  `}
`
export const Footer = styled.div<CollapsedProps>`
  ${({ theme, isCollapsed }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1.5rem 1rem;

    background-color: transparent;

    ${isCollapsed &&
    css`
      display: none;
    `}
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;

    width: 2rem;
    height: 2rem;
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    gap: 0.5rem;

    border-radius: ${theme.border.radius};
    overflow: hidden;

    padding: 0.5rem;
    background-color: ${theme.colors.white};
  `}
`

export const InputMessage = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    color: ${theme.colors.black};
    background-color: transparent;
    transition: all 1s;

    width: 16rem;

    &:not(:placeholder-shown) {
      width: 100%;

      & + ${ButtonGroup} {
        transition: all 1s;
        transform: translateX(20rem);
      }
    }
  `}
`

export const SubmitButtonWrapper = styled.div`
  ${({ theme }) => css``}
`
type MessageWrapperProps = {
  alignment: 'flex-start' | 'flex-end'
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  ${({ theme, alignment }) => css`
    cursor: pointer;
    background-color: ${lighten(0.3, theme.colors.primary)};
    align-self: ${alignment};

    border-radius: ${theme.border.radius};
    padding: 0.5rem;

    span {
      opacity: 0.8;
      font-size: 1rem;
      display: block;
      text-align: end;
      color: ${darken(0.3, theme.colors.lightGray)};
    }
  `}
`

export const MessageContent = styled.div`
  ${({ theme }) => css``}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    text-align: center;
    overflow: hidden;
    white-space: nowrap;

    text-overflow: ellipsis;
  `}
`
