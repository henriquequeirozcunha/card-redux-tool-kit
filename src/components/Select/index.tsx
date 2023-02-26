import { useState } from 'react'
import * as S from './styles'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { Close } from '@styled-icons/material/Close'
import Button from 'components/Button'

type ListItem = {
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
}

const Select = <T extends ListItem>({
  title,
  opened = false,
  span = 'all',
  options,
  isMultiple = false,
  onSubmit
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(opened)
  const [listSelect, setlistSelect] = useState(options)
  const [selectedItems, setSelectedItems] = useState<T[]>([])

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (index: number) => {
    const item = listSelect[index]

    item.selected = !item.selected

    setlistSelect(() => [...listSelect])

    if (!isMultiple) {
      setIsOpen(false)
      setSelectedItems([item])

      onSubmit && onSubmit([item])
    }
  }

  const handleSubmit = () => {
    const currentSelectedItems = listSelect.filter((item) => !!item.selected)

    setSelectedItems([...currentSelectedItems])
    setIsOpen(false)

    onSubmit && onSubmit(selectedItems)
  }

  const handleRemoveItem = (index: number) => {
    const selectedItem = selectedItems[index]
    const itemToUpdate = listSelect.find(
      (item) => item.value === selectedItem.value
    )

    if (itemToUpdate) itemToUpdate.selected = false

    setSelectedItems([
      ...selectedItems.filter((item) => item.value !== selectedItem.value)
    ])
    setlistSelect([...listSelect])
  }

  return (
    <S.Wrapper span={span}>
      <S.Title onClick={() => handleSetIsOpen()}>{title}</S.Title>

      <S.SelectedItemsWrapper>
        {selectedItems.map((item, index) => (
          <S.SelectedItem key={item.value}>
            <span>{item.label}</span>
            <S.RemoveIconWrapper onClick={() => handleRemoveItem(index)}>
              <Close />
            </S.RemoveIconWrapper>
          </S.SelectedItem>
        ))}
      </S.SelectedItemsWrapper>

      <S.Content isOpen={isOpen}>
        <ul>
          {listSelect.map((item, index) => (
            <S.ListItem key={item.value} onClick={() => handleSelect(index)}>
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
    </S.Wrapper>
  )
}

export default Select
