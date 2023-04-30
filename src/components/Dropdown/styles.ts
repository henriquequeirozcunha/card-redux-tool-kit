import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    z-index: ${theme.layers.alwaysOnTop};
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 0 ${theme.spacings.small};
    margin-top: ${theme.spacings.small};

    color: ${theme.colors.black};
    background-color: ${theme.colors.white};

    z-index: ${theme.layers.alwaysOnTop};
  `}
`

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
