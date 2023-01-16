import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.white};

    display: flex;
    justify-content: center;
    gap: 2rem;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    flex: 1;
    display: flex;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border: 1px solid red;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacings.medium};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    flex: 1;
    margin-top: ${theme.spacings.small};
    /* margin-bottom: auto; */
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    align-self: stretch;

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    input[type='text'] {
      outline: none;

      &:hover,
      &:active {
        border-color: ${rgba(theme.colors.primary, 0.2)};
      }
    }
  `}
`
