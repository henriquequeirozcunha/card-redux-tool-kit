import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'

export const Spinner = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;

    border-radius: 50%;

    border-top: 3px solid ${theme.colors.white};
    border-right: 3px solid ${theme.colors.white};
    border-bottom: 3px solid ${theme.colors.white};
    border-left: 3px solid ${darken(0.3, theme.colors.white)};
    background: transparent;

    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  `}
`

const spinAnimation = keyframes`
0% { transform: rotate(0); };
100% { transform: rotate(360deg); };
`
