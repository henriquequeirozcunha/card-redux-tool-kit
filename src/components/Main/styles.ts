import * as ButtonStyles from 'components/Button/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-height: 70rem;
    min-height: 20rem;
    overflow-y: scroll;
    width: 80%;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};

    align-self: stretch;
    flex: 1;
  `}
`

export const CardForm = styled.div`
  ${({ theme }) => css`
    margin-bottom: 5rem;
  `}
`

export const CardListWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    justify-items: center;
  `}
`
