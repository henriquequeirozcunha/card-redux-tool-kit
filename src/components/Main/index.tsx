import Button from 'components/Button'
import Card from 'components/Card'
import { Product } from 'Core/Domain/Entities/product'
import { useEffect, useState } from 'react'
import {
  createNewEmptyProduct,
  generateUUID,
  mockProducts
} from 'store/productSlice'
import * as S from './styles'

const defaultProductValues: Product = {
  id: '',
  name: 'New Product',
  price: 0
}

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Component'
}) => {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>(defaultProductValues)

  useEffect(() => {
    setProducts((oldState) => [...oldState, ...mockProducts])
  }, [])

  const handleInput = (field: string, value: string) => {
    setProduct((s) => ({ ...s, [field]: value }))

    console.log('product', product)
  }

  const handleAddProduct = () => {
    if (!product.name) {
      return
    }

    const productToAdd = {
      ...product,
      id: generateUUID()
    }

    setProducts([...products, productToAdd])
  }

  const handleRemoveItem = (id: string) => {
    setProducts((p) => p.filter((p) => p.id !== id))
  }

  return (
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
  )
}

export default Main
