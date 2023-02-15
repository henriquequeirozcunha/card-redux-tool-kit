import Menu from 'components/Menu'
import SideMenu from 'components/SideMenu'
import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <S.Header>
      <SideMenu />
      <Menu />
    </S.Header>

    <S.Content>{children}</S.Content>

    <S.Footer>
      <S.FooterContent>
        <div>
          <h1>footer 1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam
            rem repudiandae corrupti unde laboriosam eius ad fugiat tempore
            molestias praesentium ipsa delectus, necessitatibus ducimus
            excepturi perspiciatis laudantium? Quia, amet.
          </p>
        </div>

        <div>
          <h1>footer 2</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam
            rem repudiandae corrupti unde laboriosam eius ad fugiat tempore
            molestias praesentium ipsa delectus, necessitatibus ducimus
            excepturi perspiciatis laudantium? Quia, amet.
          </p>
        </div>

        <div>
          <h1>footer 3</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam
            rem repudiandae corrupti unde laboriosam eius ad fugiat tempore
            molestias praesentium ipsa delectus, necessitatibus ducimus
            excepturi perspiciatis laudantium? Quia, amet.
          </p>
        </div>
      </S.FooterContent>
    </S.Footer>
  </S.Wrapper>
)

export default Base
