import { useState } from 'react'
import * as S from './styles'

type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  showOverlay?: boolean
}

const Dropdown = ({ title, children, showOverlay = true }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      {showOverlay && (
        <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}
    </S.Wrapper>
  )
}

export default Dropdown
