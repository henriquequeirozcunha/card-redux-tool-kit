import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & ButtonProps

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: ${theme.spacings.xsmall};
    cursor: pointer;

    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `}
`
