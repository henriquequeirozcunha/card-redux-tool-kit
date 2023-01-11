import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { useAppSelector } from 'store/configureStore'
import * as S from './styles'

const Menu = () => {
  const { products } = useAppSelector((store) => store.products)
  const productsAmount = products?.length

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/logo.svg" />
      </S.LogoWrapper>
      <S.Title>Product Base</S.Title>
      <S.Menu>
        <S.CartWrapper>
          {productsAmount && <S.ItemsAmount>{productsAmount}</S.ItemsAmount>}
          <ShoppingCart aria-label="Shopping Cart" />
        </S.CartWrapper>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Menu
