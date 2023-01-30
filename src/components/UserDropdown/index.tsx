import Dropdown from 'components/Dropdown'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import * as S from './styles'

const UserDropdown = () => (
  <S.Wrapper>
    <Dropdown
      title={
        <>
          <UserCircle size={24} />
        </>
      }
    >
      <label>Teste Menu</label>
      <label>Teste Menu</label>
      <label>Teste Menu</label>
    </Dropdown>
  </S.Wrapper>
)

export default UserDropdown
