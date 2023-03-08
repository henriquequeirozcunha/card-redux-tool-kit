import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${lighten(0.1, theme.colors.white)};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};

    height: 100%;
  `}
`
export const GroupWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const GroupName = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    border-bottom: 1px solid ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const GroupItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `}
`
