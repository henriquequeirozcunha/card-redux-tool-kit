import { PlusCircle } from '@styled-icons/heroicons-solid/PlusCircle'
import { useState } from 'react'
import * as S from './styles'

const SideMenu = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const handleClickOutside = () => {
    if (IsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <S.Wrapper onClick={() => handleClickOutside()}>
      <S.Container IsOpen={IsOpen}>
        <S.FloatButton onClick={() => setIsOpen(!IsOpen)}>
          <PlusCircle fill="white" width="80%" />
        </S.FloatButton>

        <S.Content>
          <S.Navbar>
            <S.ListGroup>
              <S.ListName>Group 1</S.ListName>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
            </S.ListGroup>

            <S.ListGroup>
              <S.ListName>Group 2</S.ListName>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="#">Link 1</S.LinkItem>
              </S.ListItem>
            </S.ListGroup>
          </S.Navbar>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default SideMenu