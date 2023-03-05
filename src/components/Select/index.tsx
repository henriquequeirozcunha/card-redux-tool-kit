import { useState } from 'react'
import * as S from './styles'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { Close } from '@styled-icons/material/Close'
import Button from 'components/Button'
import TextInput from 'components/TextInput'

export type ListItem = {
  label: string
  value: string
  selected?: boolean
}

export type SelectProps<T extends ListItem> = {
  title: string
  opened?: boolean
  span?: string | undefined
  options: T[]
  isMultiple?: boolean
  onSubmit?: (selectedList: T[]) => void
  title_position?: 'top' | 'float'
}

const Select = <T extends ListItem>({
  title,
  opened = false,
  span = 'all',
  options,
  isMultiple = false,
  onSubmit,
  title_position = 'top'
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(opened)
  const [listSelect, setlistSelect] = useState(options)
  const [selectedItems, setSelectedItems] = useState<T[]>([])
  const [search, setSearch] = useState('')

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (selectedItem: T) => {
    const currentItem = listSelect.find(
      (item) => item.value == selectedItem.value
    )

    if (!currentItem) return

    currentItem.selected = !currentItem.selected

    setlistSelect(() => [...listSelect])

    if (!isMultiple) {
      setIsOpen(false)
      setSelectedItems([currentItem])

      onSubmit && onSubmit([currentItem])
    }
  }

  const handleSubmit = () => {
    const currentSelectedItems = listSelect.filter((item) => !!item.selected)

    setSelectedItems([...currentSelectedItems])
    setIsOpen(false)

    onSubmit && onSubmit(currentSelectedItems)
  }

  const handleRemoveItem = (selectedItem: T) => {
    const currentItem = listSelect.find(
      (item) => item.value == selectedItem.value
    )

    if (!currentItem) return

    const itemToUpdate = listSelect.find(
      (item) => item.value === selectedItem.value
    )

    if (itemToUpdate) itemToUpdate.selected = false

    setSelectedItems([
      ...selectedItems.filter((item) => item.value !== currentItem.value)
    ])
    setlistSelect([...listSelect])
  }

  const handleClearFilter = () => {
    listSelect.forEach((item) => (item.selected = false))

    setlistSelect([...listSelect])
    setSelectedItems([])
  }

  return (
    <S.Wrapper span={span}>
      {title_position === 'top' && <S.Title>{title}</S.Title>}

      <S.InputWrapper
        hasContent={!!selectedItems.length}
        onClick={() => handleSetIsOpen()}
      >
        {title_position === 'float' && <S.Title>{title}</S.Title>}

        {isMultiple && (
          <S.ClearFilterIconWrapper
            onClick={(e) => {
              e.stopPropagation()
              handleClearFilter()
            }}
          >
            <Close />
          </S.ClearFilterIconWrapper>
        )}

        {selectedItems.map((item) => (
          <S.SelectedItem key={item.value}>
            <span>{item.label}</span>
            <S.UnSelectIconWrapper
              onClick={(e) => {
                e.stopPropagation()
                handleRemoveItem(item)
              }}
            >
              <Close />
            </S.UnSelectIconWrapper>
          </S.SelectedItem>
        ))}

        <S.Content isOpen={isOpen}>
          <S.SearchWrapper onClick={(e) => e.stopPropagation()}>
            <TextInput
              label="Filtrar resultados..."
              name="search"
              onInputChange={(value) => setSearch(value)}
            />
          </S.SearchWrapper>

          <ul>
            {listSelect
              .filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <S.ListItem
                  key={item.value}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSelect(item)
                  }}
                >
                  {item.label}
                  {item.selected ? (
                    <S.IconWrapper>
                      <Check />
                    </S.IconWrapper>
                  ) : (
                    ''
                  )}
                </S.ListItem>
              ))}
          </ul>

          {isMultiple && (
            <S.ButtonGroup>
              <Button onClick={() => handleSubmit()}>Aplicar Filtro</Button>
            </S.ButtonGroup>
          )}
        </S.Content>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default Select
