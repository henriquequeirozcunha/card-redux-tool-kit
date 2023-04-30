import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 20rem;
    background-color: ${theme.colors.lightGray};

    clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
    padding: 0 5%;

    display: flex;
    gap: 3rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.02) translateY(-1rem);
    }
  `}
`

const figureAnimation = keyframes`
 0% { transform: translate(-50%, 200%); opacity: 0; };
 75% { transform: translate(-50%, -100%); };
 100% { transform: translate(-50%, -50%); opacity: 1; };
`

export const ImageWrapper = styled.figure`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid ${theme.colors.white};
    align-self: center;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      ${FigureCaption} {
        animation-name: ${figureAnimation};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }

      ${FigureImage} {
        transform: scale(1);
        filter: blur(3px) brightness(80%);
      }
    }
  `}
`
export const FigureImage = styled.img`
  ${({ theme }) =>
    css`
      transform: scale(1.1);
      transition: all 0.5s;
    `}
`

export const FigureCaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};

    top: 50%;
    left: 50%;
    transform: translate(-50%, 200%);
    opacity: 0;
  `}
`

export const ButtonPopup = styled.div`
  ${({ theme }) =>
    css`
      cursor: pointer;
    `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: 2rem 0 2rem 1rem;
    display: flex;
    flex-direction: column;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding: 0 ${theme.spacings.small};

    display: flex;

    justify-content: flex-end;
  `}
`

export const RemoveButton = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    color: ${theme.colors.primary};
  `}
`
