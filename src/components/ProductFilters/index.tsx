import { useAppDispatch, useAppSelector } from 'store/configureStore'
import { categorySelectors, listCategoriesAsync } from 'store/categorySlice'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import Checkbox from 'components/Checkbox'

type FilterGroup = {
  label: string
  items: FilterItem[]
}

type FilterItem = {
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

  const formatDataToFilter = useCallback(() => {
    const groups: FilterGroup[] = []

    if (categories.length) {
      const categoriesItems: FilterItem[] = categories.map((item) => ({
        name: item.name,
        value: item.id
      }))

      groups.push({
        label: 'Categorias',
        items: categoriesItems
      })
    }

    return groups
  }, [categories])

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
            {group.items.map((item) => (
              <Checkbox
                key={item.value}
                label={item.name}
                labelFor={item.value}
                onCheck={() => console.log('check')}
              />
            ))}
          </S.GroupItemsWrapper>
        </S.GroupWrapper>
      ))}
    </S.Wrapper>
  )
}
export default ProductFilters
