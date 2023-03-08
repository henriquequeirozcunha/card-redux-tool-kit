import { useAppDispatch, useAppSelector } from 'store/configureStore'
import { categorySelectors, listCategoriesAsync } from 'store/categorySlice'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import Checkbox from 'components/Checkbox'
import RadioButton from 'components/RadioButton'
import { mockCompanies } from '../../../tests/mocks'

type FilterGroup = {
  label: string
  items: FilterItem[]
  type: 'radio' | 'check'
}

type FilterItem = {
  id: string
  name: string
  value: string
  selected?: boolean
}

const ProductFilters = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(categorySelectors.selectAll)
  const { categoriesLoaded } = useAppSelector((state) => state.categories)
  const [filters, setFilters] = useState<FilterGroup[]>([])
  const [filtersLoaded, setFiltersLoaded] = useState(false)

  const companies = mockCompanies

  const formatDataToFilter = useCallback(() => {
    const groups: FilterGroup[] = []

    if (categories.length) {
      const categoriesItems: FilterItem[] = categories.map((item) => ({
        name: item.name,
        value: item.id,
        id: item.id
      }))

      groups.push({
        label: 'Categorias',
        type: 'radio',
        items: categoriesItems
      })
    }

    if (companies.length) {
      const companyItems: FilterItem[] = companies.map((item) => ({
        name: item.trading_name,
        value: item.id,
        id: item.id
      }))

      groups.push({
        label: 'Empresas',
        type: 'check',
        items: companyItems
      })
    }

    return groups
  }, [categories, companies])

  useEffect(() => {
    if (!categoriesLoaded) {
      dispatch(listCategoriesAsync())
    }
  }, [categoriesLoaded, dispatch])

  useEffect(() => {
    if (!filtersLoaded) {
      setFilters([...formatDataToFilter()])
      setFiltersLoaded(true)
    }
  }, [filtersLoaded, formatDataToFilter])

  return (
    <S.Wrapper>
      <h1>Filtros</h1>

      {filters.map((group) => (
        <S.GroupWrapper key={group.label}>
          <S.GroupName>{group.label}</S.GroupName>

          <S.GroupItemsWrapper>
            {group.items.map((item, index) => (
              <>
                {group.type === 'check' ? (
                  <Checkbox
                    key={`${index}_${item.id}`}
                    label={item.name}
                    labelFor={item.value}
                    onCheck={() => console.log('check')}
                  />
                ) : (
                  <RadioButton
                    key={`${index}_${item.id}`}
                    label={item.name}
                    labelFor={item.value}
                    name={group.label}
                    onCheck={() => console.log('radio')}
                  />
                )}
              </>
            ))}
          </S.GroupItemsWrapper>
        </S.GroupWrapper>
      ))}
    </S.Wrapper>
  )
}
export default ProductFilters
