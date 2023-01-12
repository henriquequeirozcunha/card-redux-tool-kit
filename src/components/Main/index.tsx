import Button from 'components/Button'
import Card from 'components/Card'
import { CreateBasketPaymentIntent } from 'core/application/services/basket'
import { generateUniqueId } from 'core/application/utils'
import { Product } from 'core/domain/entities/product'
import { useEffect } from 'react'
import { createBasketPaymentIntentAsync } from 'store/basketSlice'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import {
  addProduct,
  listProductsAsync,
  removeProduct,
  setProduct,
  setProducts
} from 'store/productSlice'
import Base from 'templates/Base'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Component'
}) => {
  const { products, product, status } = useAppSelector(
    (store) => store.products
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    //dispatch(setProducts())
    dispatch(listProductsAsync({}))
  }, [])

  const handleInput = (field: string, value: string) => {
    dispatch(setProduct({ ...product, [field]: value }))
  }

  const handleAddProduct = () => {
    if (!product?.name) {
      return
    }

    const productToAdd: Product = {
      ...product,
      price: 1200,
      wishList: true,
      id: generateUniqueId()
    }

    dispatch(addProduct(productToAdd))
  }

  const handleRemoveItem = (id: string) => {
    dispatch(removeProduct({ id }))
  }

  const handleCreateBasket = () => {
    const productsWithlist = products?.filter((p) => p.wishList)

    if (!productsWithlist?.length) return

    const data: CreateBasketPaymentIntent.Command = {
      products: productsWithlist,
      totalPrice: productsWithlist?.reduce(
        (acc, item) => (acc += item.price),
        0
      )
    }

    dispatch(createBasketPaymentIntentAsync(data))
  }

  if (status && status.includes('pending')) {
    return (
      <Base>
        <h1>loading</h1>
      </Base>
    )
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Logo
          src="/img/logo.svg"
          alt="Imagem de um átomo com os textos React Avançado"
        />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Container>
          <S.Title>My Container</S.Title>
          <S.Content>
            <S.CardForm>
              <label htmlFor="name">Nome do Produto</label>
              <input
                type="text"
                name="name"
                onChange={(v) => handleInput('name', v.target.value)}
              />
              <Button onClick={() => handleAddProduct()}>Adicionar</Button>
              <Button onClick={() => handleCreateBasket()}>Fazer Pedido</Button>
            </S.CardForm>

            <S.CardListWrapper>
              {products?.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  onRemoveItem={() => handleRemoveItem(product.id)}
                />
              ))}
            </S.CardListWrapper>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </Base>
  )
}

export default Main
