import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`

export const Title = styled.h1`
  font-size: 2.5rem;
`
