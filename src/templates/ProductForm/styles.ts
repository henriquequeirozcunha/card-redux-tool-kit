import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`
