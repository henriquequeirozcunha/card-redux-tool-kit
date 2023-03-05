import Button from 'components/Button'
import TextInput from 'components/TextInput'
import { CreateBasketPaymentIntent } from 'core/application/services/basket'
import { generateUniqueId } from 'core/application/utils'
import { Product } from 'core/domain/entities'
import { useState } from 'react'
import { createBasketPaymentIntentAsync } from 'store/basketSlice'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import {
  addProduct,
  createNewEmptyProduct,
  productSelectors
} from 'store/productSlice'
import * as S from './styles'

const CardForm = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(productSelectors.selectAll)
  const [product, setProduct] = useState<Product>(createNewEmptyProduct())

  const handleInput = (field: string, value: string) => {
    if (product) {
      setProduct({ ...product, [field]: value })
    }
  }

  const handleCreateBasket = () => {
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

  return (
    <S.Wrapper>
      <S.Title>My Container</S.Title>
      <TextInput
        label="Nome do Produto"
        name="name"
        onInputChange={(v) => handleInput('name', v)}
      />
      <Button onClick={() => handleAddProduct()}>Adicionar</Button>
      <Button onClick={() => handleCreateBasket()}>Fazer Pedido</Button>
    </S.Wrapper>
  )
}

export default CardForm
