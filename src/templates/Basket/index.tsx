import ProductBanner from 'components/ProductBanner'
import { basketSelectors } from 'store/basketSlice'
import { useAppSelector } from 'store/configureStore'
import Base from 'templates/Base'
import * as S from './styles'

const Basket = () => {
  const basket = useAppSelector(basketSelectors.selectAll)[0]

  console.log('basket', basket)

  return (
    <Base>
      <S.Wrapper>
        <h1>Basket</h1>

        <S.ProductsWrapper>
          {basket?.products.map((product) => (
            <ProductBanner key={product.id} product={product} />
          ))}
        </S.ProductsWrapper>
      </S.Wrapper>
    </Base>
  )
}

export default Basket
