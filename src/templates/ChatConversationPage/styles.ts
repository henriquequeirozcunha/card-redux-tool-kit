import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};

    display: flex;
  `}
`

export const ConversationsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: flex-end;

    position: fixed;
    bottom: 1rem;
    right: 1rem;

    z-index: ${theme.layers.alwaysOnTop};
  `}
`
