import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;

    margin-bottom: ${theme.spacings.medium};
  `}
`
