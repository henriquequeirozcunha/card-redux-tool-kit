import Card from 'components/Card'
import CardForm from 'components/CardForm'
import ProductFilters from 'components/ProductFilters'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import {
  listProductsAsync,
  productSelectors,
  removeProduct
} from 'store/productSlice'
import Base from 'templates/Base'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Component'
}) => {
  const { status } = useAppSelector((state) => state.products)
  const products = useAppSelector(productSelectors.selectAll)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(listProductsAsync({}))
  }, [dispatch])

  const handleRemoveItem = (id: string) => {
    dispatch(removeProduct(id))
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
        <S.Header>
          <S.Logo
            src="/img/logo.svg"
            alt="Imagem de um átomo com os textos React Avançado"
          />
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Header>

        <S.MainContent>
          <S.FiltersWrapper>
            <ProductFilters />
          </S.FiltersWrapper>

          <S.Container>
            <S.CardListWrapper>
              {products?.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  onRemoveItem={() => handleRemoveItem(product.id)}
                />
              ))}
            </S.CardListWrapper>
          </S.Container>

          <S.CardFormWrapper>
            <CardForm />
          </S.CardFormWrapper>
        </S.MainContent>
      </S.Wrapper>
    </Base>
  )
}

export default Main
