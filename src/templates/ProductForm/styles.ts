import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: red;
    text-align: center;

    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 0 ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    justify-content: center;
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    flex: 0 0 100%;

    display: grid;
    grid-template-columns: repeat(12, 1fr);

    column-gap: 1rem;
  `}
`
