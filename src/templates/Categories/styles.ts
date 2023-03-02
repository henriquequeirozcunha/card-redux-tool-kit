import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    min-height: 80vh;
  `}
`

export const TableWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    margin-top: 2rem;
    width: 80%;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    overflow: hidden;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);

    /* Comeco style */
    border-collapse: collapse;
    font-size: ${theme.font.sizes.medium};

    ${Th},
    ${Td} {
      padding: 1.2rem 1.5rem;
    }
  `}
`

export const THead = styled.thead`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${Tr} {
      background-color: ${darken(0.3, theme.colors.secondary)};
      text-align: left;
      font-weight: ${theme.font.bold};
    }
  `}
`

const borderStyleModifiers = {
  stripped: (theme: DefaultTheme) => css`
    ${Tr}:nth-child(even) {
      background-color: ${theme.colors.lightGray};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    ${Tr}:nth-child(even) {
      background-color: ${theme.colors.white};
    }
  `
}

const tableRowModifiers = {
  active: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold} !important;
  `
}

type TableRowStyle = {
  borderStyle?: 'stripped' | 'normal'
}

export const TBody = styled.tbody<TableRowStyle>`
  ${({ theme, borderStyle }) => css`
    cursor: pointer;

    ${borderStyle && borderStyleModifiers[borderStyle](theme)}

    ${Tr} {
      &:last-of-type {
        border-bottom: 3px solid ${darken(0.3, theme.colors.secondary)};
      }

      &:hover {
        background-color: ${theme.colors.lightGray};
      }

      ${Td} {
        &:first-of-type {
          cursor: pointer;
        }
      }
    }
  `}
`

type TrProps = {
  active?: boolean
}

export const Tr = styled.tr<TrProps>`
  ${({ theme, active }) => css`
    border-bottom: 1px solid ${theme.colors.gray};

    ${active && tableRowModifiers.active(theme)}
  `}
`

export const Th = styled.th<{ sortable?: boolean }>`
  ${({ theme, sortable }) => css`
    ${sortable &&
    css`
      cursor: pointer;
    `}
  `}
`

export const Td = styled.td``
