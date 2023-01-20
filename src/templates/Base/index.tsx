import Menu from 'components/Menu'
import SideMenu from 'components/SideMenu'
import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <SideMenu />
    <S.Header>
      <Menu />
    </S.Header>

    <S.Content>{children}</S.Content>

    <S.Footer>
      <h1>Footer</h1>
    </S.Footer>
  </S.Wrapper>
)

export default Base
