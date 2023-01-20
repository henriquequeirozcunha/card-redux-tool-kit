import { basketSelectors } from 'store/basketSlice'
import { useAppSelector } from 'store/configureStore'
import Base from 'templates/Base'
import * as S from './styles'

const Basket = () => {
  const basket = useAppSelector(basketSelectors.selectAll)

  return (
    <Base>
      <S.Wrapper>
        <h1>Basket</h1>
      </S.Wrapper>
    </Base>
  )
}

export default Basket
