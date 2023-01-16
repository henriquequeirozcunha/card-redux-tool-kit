import { Product } from 'core/domain/entities'
import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import { useAppSelector } from 'store/configureStore'
import { basketSelectors, setProductQuantity } from 'store/basketSlice'
import { useDispatch } from 'react-redux'

export type ProductDetailProps = {
  product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const basket = useAppSelector(basketSelectors.selectAll)
  const dispatch = useDispatch()

  const handleUpdateProcutBasket = (id: string) => {
    console.log('entrou handleUpdateProcutBasket')
    if (!basket.length) return

    const basketId = basket[0].id

    console.log('basketId', basketId)

    dispatch(setProductQuantity({ basketId: basketId, productId: id }))
  }

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src={product.pictureUrl!} alt={product.name} layout="fill" />
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{product.name}</S.Title>
        <S.Description>{product.description}</S.Description>
        <S.Footer>
          <input
            type="text"
            name="name"
            style={{ alignSelf: 'center' }}
            // onChange={(v) => handleInput('name', v.target.value)}
          />

          <Button onClick={() => handleUpdateProcutBasket(product.id)}>
            Atualizar
          </Button>
          <Button onClick={() => console.log('')}>Adicionar</Button>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProductDetail
