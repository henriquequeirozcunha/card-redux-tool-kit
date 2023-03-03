import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'
import { orderBy } from 'lodash'
import { Category } from 'core/domain/entities'

const listCategories: Category[] = [
  { name: 'Eletrônicos', id: '1', is_principal: true },
  { name: 'Limpeza', id: '2' },
  { name: 'Construção', id: '3' },
  { name: 'Outros', id: '4' },
  { name: 'Outros 1', id: '5' },
  { name: 'Outros 2', id: '6' },
  { name: 'Outros 3', id: '7' },
  { name: 'Outros 4', id: '8' },
  { name: 'Outros 5', id: '9' },
  { name: 'Outros 6', id: '10' },
  { name: 'Outros 7', id: '11' }
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
                <S.Th sortable onClick={() => handleOrderBy('id')}>
                  #Id
                </S.Th>
                <S.Th sortable onClick={() => handleOrderBy('name')}>
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
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  active={selectedIndex === index}
                >
                  <S.Td>{item.id}</S.Td>
                  <S.Td>{item.name}</S.Td>
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
