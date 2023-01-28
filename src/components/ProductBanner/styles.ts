import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 20rem;
    background-color: ${theme.colors.lightGray};

    clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
    padding: 0 5%;

    display: flex;
    gap: 3rem;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid ${theme.colors.white};
    align-self: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: 2rem 0 2rem 1rem;
    display: flex;
    flex-direction: column;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: 0 ${theme.spacings.small};

    display: flex;

    justify-content: flex-end;
  `}
`

export const RemoveButton = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    color: ${theme.colors.primary};
  `}
`
