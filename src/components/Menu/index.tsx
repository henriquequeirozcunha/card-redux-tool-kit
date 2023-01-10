import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import * as S from './styles'

const amount = 1

const Menu = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/logo.svg" />
      </S.LogoWrapper>
      <S.Title>Product Base</S.Title>
      <S.Menu>
        <S.CartWrapper>
          {amount && <S.ItemsAmount>{amount}</S.ItemsAmount>}
          <ShoppingCart aria-label="Shopping Cart" />
        </S.CartWrapper>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Menu
