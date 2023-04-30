import styled, { css } from 'styled-components'

type RowProps = {
  cols?: number
}

export const Grid = styled.div<RowProps>`
  ${({ theme, cols = 12 }) => css`
    flex: 0 0 100%;

    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);

    column-gap: 1rem;
    row-gap: 1.5rem;

    align-items: start;
  `}
`
