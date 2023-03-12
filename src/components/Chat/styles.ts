import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin: auto; // temporario
    display: flex;
    flex-direction: column;

    width: 30rem;
    min-height: 30rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    background-color: ${theme.colors.lightGray};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;

    padding: ${theme.spacings.xxsmall};

    background-color: ${theme.colors.primary};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`
export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem 1rem;

    background-color: transparent;
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
export const Message = styled.div`
  ${({ theme }) => css`
    background-color: ${lighten(0.3, theme.colors.primary)};
    align-self: flex-start;

    border-radius: ${theme.border.radius};
    padding: 0.5rem;

    &:nth-child(even) {
      align-self: flex-end;
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css``}
`
