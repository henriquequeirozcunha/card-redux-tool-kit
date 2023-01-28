import { Product } from 'core/domain/entities'
import * as S from './styles'
import { Trash } from '@styled-icons/fa-solid/Trash'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import { basketSelectors, removeBasketItemAsync } from 'store/basketSlice'
import { Spinner } from '@styled-icons/evil/Spinner'

export type ProductBannerProps = {
  product: Product
}

const ProductBanner = ({ product }: ProductBannerProps) => {
  const dispatch = useAppDispatch()
  const basket = useAppSelector(basketSelectors.selectAll)[0]
  const { status } = useAppSelector((state) => state.basket)

  const handleRemoveItem = () => {
    dispatch(
      removeBasketItemAsync({ basketId: basket.id, productId: product.id })
    )
  }

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={product.pictureUrl!} alt={product.name} />
      </S.ImageWrapper>
      <S.Content>
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <S.Footer>
          <S.RemoveButton onClick={() => handleRemoveItem()}>
            {status.includes(`pendingRemoveBasketItem_${product.id}`) ? (
              <Spinner />
            ) : (
              <Trash />
            )}
          </S.RemoveButton>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProductBanner
