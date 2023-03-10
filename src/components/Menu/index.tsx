import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import UserDropdown from 'components/UserDropdown'
import { CreateBasketPaymentIntent } from 'core/application/services/basket'
import { useRouter } from 'next/dist/client/router'
import {
  basketSelectors,
  createBasketPaymentIntentAsync
} from 'store/basketSlice'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import { productSelectors } from 'store/productSlice'

import * as S from './styles'

const Menu = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const products = useAppSelector(productSelectors.selectAll)
  const baskets = useAppSelector(basketSelectors.selectEntities)
  const productsAmount = products?.filter((p) => p.wishList).length

  const handleGoToBasketPage = () => {
    if (!baskets[0]) {
      const productsWithlist = products?.filter((p) => p.wishList)

      if (!productsWithlist?.length) return

      const data: CreateBasketPaymentIntent.Command = {
        products: productsWithlist,
        total_price: productsWithlist?.reduce(
          (acc, item) => (acc += item.price),
          0
        )
      }

      dispatch(createBasketPaymentIntentAsync(data))
    }

    router.push('/basket')
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo src="/img/logo.svg" />
      </S.LogoWrapper>
      <S.Title onClick={() => router.push('/')}>Product Base</S.Title>
      <S.Menu>
        <UserDropdown />
        <S.CartWrapper onClick={() => handleGoToBasketPage()}>
          {!!productsAmount && <S.ItemsAmount>{productsAmount}</S.ItemsAmount>}
          <ShoppingCart aria-label="Shopping Cart" />
        </S.CartWrapper>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Menu
