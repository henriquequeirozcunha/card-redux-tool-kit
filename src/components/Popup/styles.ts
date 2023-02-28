import styled, { css, keyframes } from 'styled-components'

export const Overlay = styled.main`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: ${theme.layers.overlay};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
export const showModalAnimation = keyframes`
 0% { transform: translateY(300%) scale(0.5); opacity: 0; };
 100% { transform: translate(0) scale(1); opacity: 1; };
`

export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 80%;
      z-index: ${theme.layers.alwaysOnTop};
      min-height: 80vh;
      background-color: ${theme.colors.white};
      padding: ${theme.spacings.small};

      animation-name: ${showModalAnimation};
      animation-duration: 1s;
      animation-fill-mode: forwards;

      border-radius: ${theme.border.radius};
      box-shadow: ${`0 2rem 4rem ${theme.colors.black}`};

      display: flex;
      flex-direction: column;
      gap: 1rem;
    `}
`

export const Header = styled.div`
  ${({ theme }) =>
    css`
      position: relative;
    `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondary};
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  `}
`

export const Title = styled.h1`
  ${({ theme }) =>
    css`
      text-align: center;
    `}
`

export const Content = styled.div`
  ${({ theme }) =>
    css`
      flex: 1;
    `}
`
