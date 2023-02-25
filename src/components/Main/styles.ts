import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 2rem;
  `}
`

export const MainContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: grid;
    grid-template-columns: 20% 1fr 20%;
  `}
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
    flex: 1;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};

    color: ${theme.colors.black};
  `}
`

export const FiltersWrapper = styled.div`
  ${({ theme }) => css`
    overflow-wrap: anywhere;
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

export const CardFormWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
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
