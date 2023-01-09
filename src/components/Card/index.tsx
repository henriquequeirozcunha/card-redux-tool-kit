import * as S from './styles'
import { Product } from 'Core/Domain/Entities/product'
import Button from 'components/Button'
import Image from 'next/image'

export type CardProps = {
  product: Product
  onRemoveItem: (id: string) => void
}

const defaultPictureUrl = '/img/hero-illustration.svg'

const Card = ({ product, onRemoveItem }: CardProps) => {
  const handleClick = () => {
    !!onRemoveItem && onRemoveItem(product.id)
  }

  return (
    <S.Wrapper>
      {product && (
        <>
          <S.Header>
            <h3>{product?.name}</h3>
          </S.Header>

          <S.Content>
            <S.ImageWrapper>
              <Image
                src={product.pictureUrl || defaultPictureUrl}
                alt={product.name}
                height={100}
                width={100}
              />
            </S.ImageWrapper>
          </S.Content>

          <S.Footer>
            <Button onClick={handleClick}>Remover</Button>
          </S.Footer>
        </>
      )}
    </S.Wrapper>
  )
}

export default Card
