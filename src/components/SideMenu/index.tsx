import { PlusCircle } from '@styled-icons/heroicons-solid/PlusCircle'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import * as S from './styles'

const SideMenu = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleSetIsOpen = () => {
    if (IsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <S.Wrapper ref={ref} IsOpen={IsOpen} onClick={() => handleSetIsOpen()}>
      <S.Container IsOpen={IsOpen}>
        <S.FloatButton onClick={() => setIsOpen(!IsOpen)}>
          <PlusCircle fill="white" width="80%" />
        </S.FloatButton>

        <S.Content>
          <S.Navbar>
            <S.ListGroup>
              <S.ListName>Cadastros</S.ListName>
              <S.ListItem>
                <Link href="/product" passHref>
                  <S.LinkItem href="#">Produto</S.LinkItem>
                </Link>
              </S.ListItem>
              <S.ListItem>
                <Link href="/category" passHref>
                  <S.LinkItem href="#">Categoria</S.LinkItem>
                </Link>
              </S.ListItem>
              <S.ListItem>
                <S.LinkItem href="/company">Empresa</S.LinkItem>
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
