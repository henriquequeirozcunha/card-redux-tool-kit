import styled, { css } from 'styled-components'

export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    color: red;

    span {
      font-size: 1.2rem;
    }
  `}
`
