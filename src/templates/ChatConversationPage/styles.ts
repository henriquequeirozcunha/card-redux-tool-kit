import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};

    display: flex;
  `}
`
