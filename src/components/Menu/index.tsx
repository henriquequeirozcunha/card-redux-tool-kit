import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { basketSelectors } from 'store/basketSlice'
import { useAppSelector } from 'store/configureStore'
import { productSelectors } from 'store/productSlice'
import * as S from './styles'

const Menu = () => {
  const products = useAppSelector(productSelectors.selectAll)
  const baskets = useAppSelector(basketSelectors.selectEntities)
  const productsAmount = products?.filter((p) => p.wishList).length

  const handleGoToBasketPage = () => {
    console.log('baskets', baskets)
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/logo.svg" />
      </S.LogoWrapper>
      <S.Title>Product Base</S.Title>
      <S.Menu>
        <S.CartWrapper onClick={() => handleGoToBasketPage()}>
          {!!productsAmount && <S.ItemsAmount>{productsAmount}</S.ItemsAmount>}
          <ShoppingCart aria-label="Shopping Cart" />
        </S.CartWrapper>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Menu
