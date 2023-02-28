import * as S from './styles'
import { Close } from '@styled-icons/material/Close'

export type PopupProps = {
  title: string
  children: React.ReactNode
  onClose: () => void
}

const Popup = ({ title, children, onClose }: PopupProps) => {
  const handleCloseButton = () => {
    onClose && onClose()
  }

  return (
    <S.Overlay>
      <S.Wrapper>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={() => handleCloseButton()}>
            <Close />
          </S.CloseButton>
        </S.Header>

        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </S.Overlay>
  )
}

export default Popup
