import * as S from './styles'
import { Product } from 'Core/domain/entities/product'
import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'

export type CardProps = {
  product: Product
  onRemoveItem: (id: string) => void
}

const defaultPictureUrl = '/img/hero-illustration.svg'

const Card = ({ product, onRemoveItem }: CardProps) => {
  const handleClick = () => {
    !!onRemoveItem && onRemoveItem(product.id)
  }

  const getProductUrl = (product: Product) => {
    return `/product/${product.id}`
  }

  return (
    <S.Wrapper>
      {product && (
        <>
          <S.Header>
            <Link href={getProductUrl(product)} passHref>
              <S.CardTitle>{product?.name}</S.CardTitle>
            </Link>
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
