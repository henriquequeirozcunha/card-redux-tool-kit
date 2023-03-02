import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'
import { orderBy } from 'lodash'

type Category = {
  label: string
  value: number
  is_principal?: boolean
}

const listCategories: Category[] = [
  { label: 'Eletrônicos', value: 1, is_principal: true },
  { label: 'Limpeza', value: 2 },
  { label: 'Construção', value: 3 },
  { label: 'Outros', value: 4 },
  { label: 'Outros 1', value: 5 },
  { label: 'Outros 2', value: 6 },
  { label: 'Outros 3', value: 7 },
  { label: 'Outros 4', value: 8 },
  { label: 'Outros 5', value: 9 },
  { label: 'Outros 6', value: 10 },
  { label: 'Outros 7', value: 11 }
]

type Sort = {
  field: string
  order: 'asc' | 'desc'
}

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [list, setList] = useState<Category[]>([])
  const [sort, setSort] = useState<Sort | null>()
  const [listLoaded, setListLoaded] = useState(false)

  useEffect(() => {
    if (!listLoaded) {
      setListLoaded(true)
      setList([...listCategories])
    }
  }, [listLoaded])

  const handleChangeIsPrincipal = (index: number) => {
    const selectedItem = list[index]

    selectedItem.is_principal = !selectedItem.is_principal

    setList([...list])
  }

  const handleOrderBy = (field: string) => {
    let currentSort: Sort

    if (!sort || sort?.field !== field) {
      currentSort = {
        field,
        order: 'asc'
      }
    } else {
      currentSort = {
        field,
        order: sort.order === 'asc' ? 'desc' : 'asc'
      }
    }

    const orderedList = orderBy(list, currentSort.field, currentSort.order)

    setSort(currentSort)
    setList([...orderedList])
  }

  return (
    <Base>
      <S.Wrapper>
        <h1>Categories</h1>

        <S.TableWrapper>
          <S.Table>
            <S.THead>
              <S.Tr>
                <S.Th sortable onClick={() => handleOrderBy('value')}>
                  #Id
                </S.Th>
                <S.Th sortable onClick={() => handleOrderBy('label')}>
                  Nome
                </S.Th>
                <S.Th sortable onClick={() => handleOrderBy('is_principal')}>
                  Principal
                </S.Th>
                <S.Th>Coluna 4</S.Th>
              </S.Tr>
            </S.THead>

            <S.TBody borderStyle="stripped">
              {list.map((item, index) => (
                <S.Tr
                  key={item.value}
                  onClick={() => setSelectedIndex(index)}
                  active={selectedIndex === index}
                >
                  <S.Td>{item.value}</S.Td>
                  <S.Td>{item.label}</S.Td>
                  <S.Td
                    onClick={(e) => {
                      e.stopPropagation()
                      handleChangeIsPrincipal(index)
                    }}
                  >
                    {item.is_principal ? 'Sim' : 'Não'}
                  </S.Td>
                  <S.Td>Descrição exemplo</S.Td>
                </S.Tr>
              ))}
            </S.TBody>
          </S.Table>
        </S.TableWrapper>
      </S.Wrapper>
    </Base>
  )
}

export default Categories
