import Card from 'components/Card'
import ProductFilters, { FilterGroup } from 'components/ProductFilters'
import { Spinner } from 'components/Spinner'
import { ListProducts } from 'core/application/services/products'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import {
  listProductsAsync,
  productSelectors,
  removeProduct
} from 'store/productSlice'
import Base from 'templates/Base'
import { KeyValueObject } from 'utils'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Component'
}) => {
  const { status, productsLoaded } = useAppSelector((state) => state.products)
  const products = useAppSelector(productSelectors.selectAll)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!productsLoaded) {
      dispatch(listProductsAsync({}))
    }
  }, [dispatch, productsLoaded])

  const handleRemoveItem = (id: string) => {
    dispatch(removeProduct(id))
  }

  const mapToListProductQuery = (
    filters: FilterGroup[]
  ): ListProducts.Query => {
    const fieldMapping: KeyValueObject = {
      category: 'category_id',
      company: 'company_id'
    }

    const result = filters.reduce((acc, group) => {
      if (!fieldMapping[group.group_key as keyof KeyValueObject]) return acc

      const field = fieldMapping[group.group_key as keyof KeyValueObject]

      return {
        ...acc,
        [field as string]: group.items.map((item) => item.value)
      }
    }, {} as ListProducts.Query)

    return result
  }

  const handleOnChangeProductFilter = (filters: FilterGroup[]) => {
    dispatch(listProductsAsync(mapToListProductQuery(filters)))
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
            <ProductFilters onFilter={handleOnChangeProductFilter} />
          </S.FiltersWrapper>

          <S.Container>
            {status && status.includes('pending') ? (
              <S.SpinnerWrapper>
                <Spinner width="100%" height="100%" />
              </S.SpinnerWrapper>
            ) : (
              <S.CardListWrapper>
                {products?.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    onRemoveItem={() => handleRemoveItem(product.id)}
                  />
                ))}
              </S.CardListWrapper>
            )}
          </S.Container>
        </S.MainContent>
      </S.Wrapper>
    </Base>
  )
}

export default Main
