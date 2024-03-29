import { useAppDispatch, useAppSelector } from 'store/configureStore'
import { categorySelectors, listCategoriesAsync } from 'store/categorySlice'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import Checkbox from 'components/Checkbox'
import RadioButton from 'components/RadioButton'
import { mockCompanies } from '../../../tests/mocks'

export type FilterGroup = {
  group_key: string
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

export type ProductFiltersProps = {
  onFilter?: (filters: FilterGroup[]) => void
}

const ProductFilters = ({ onFilter }: ProductFiltersProps) => {
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
        group_key: 'category',
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
        group_key: 'company',
        label: 'Empresas',
        type: 'check',
        items: companyItems
      })
    }

    return groups
  }, [categories, companies])

  useEffect(() => {
    const fetchData = async () => {
      if (!categoriesLoaded) {
        await dispatch(listCategoriesAsync()).unwrap()
      }
    }

    fetchData()
      .then(() => {
        if (!filtersLoaded) {
          setFilters([...formatDataToFilter()])
          setFiltersLoaded(true)
        }
      })
      .catch((error) => console.log(error))
  }, [categoriesLoaded, dispatch, filtersLoaded, formatDataToFilter])

  const handleOnCheck = ({
    groupIndex,
    itemIndex
  }: {
    groupIndex: number
    itemIndex: number
  }) => {
    filters[groupIndex].items.forEach((item, index) => {
      if (index === itemIndex) {
        item.selected = true
        return
      }

      item.selected = false
    })

    setFilters([...filters])

    if (onFilter) {
      const selectedFilters = filters.reduce<FilterGroup[]>((acc, group) => {
        const selectedItems = group.items.filter((item) => !!item.selected)

        if (!selectedItems.length) return acc

        acc.push({
          ...group,
          items: selectedItems
        })

        return acc
      }, [])

      onFilter([...selectedFilters])
    }
  }

  return (
    <S.Wrapper>
      <h1>Filtros</h1>

      {filters.map((group, groupIndex) => (
        <S.GroupWrapper key={`${groupIndex}_${group.label}`}>
          <S.GroupName>{group.label}</S.GroupName>

          <S.GroupItemsWrapper>
            {group.items.map((item, itemIndex) => (
              <div key={`${itemIndex}_${item.id}`}>
                {group.type === 'check' ? (
                  <Checkbox
                    key={`${itemIndex}_${item.id}`}
                    label={item.name}
                    labelFor={item.value}
                    onCheck={() => handleOnCheck({ groupIndex, itemIndex })}
                  />
                ) : (
                  <RadioButton
                    key={`${itemIndex}_${item.id}`}
                    label={item.name}
                    labelFor={item.value}
                    checked={!!item.selected}
                    name={group.label}
                    onCheck={() => {
                      handleOnCheck({ groupIndex, itemIndex })
                    }}
                  />
                )}
              </div>
            ))}
          </S.GroupItemsWrapper>
        </S.GroupWrapper>
      ))}
    </S.Wrapper>
  )
}
export default ProductFilters
