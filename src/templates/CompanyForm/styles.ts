import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;

    margin-bottom: ${theme.spacings.medium};
  `}
`
export const ButtonGroupWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: auto;
    display: flex;

    justify-content: center;

    justify-self: flex-end;
  `}
`
