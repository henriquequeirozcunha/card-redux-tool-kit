import * as S from './styles'
import { Product } from 'core/domain/entities/product'
import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Favorite } from '@styled-icons/material/Favorite'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { useAppDispatch } from 'store/configureStore'
import { setWishlist } from 'store/productSlice'

export type CardProps = {
  product: Product
  onRemoveItem: (id: string) => void
}

const defaultPictureUrl = '/img/hero-illustration.svg'

const Card = ({ product, onRemoveItem }: CardProps) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    !!onRemoveItem && onRemoveItem(product.id)
  }

  const getProductUrl = (product: Product) => {
    return `/product/${product.id}`
  }

  const handleWishlistButton = (id: string) => {
    dispatch(setWishlist({ productId: id }))
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
            <S.FavIconWrapper onClick={() => handleWishlistButton(product.id)}>
              {product.wishList ? <Favorite /> : <FavoriteBorder />}
            </S.FavIconWrapper>
            <Button onClick={handleClick}>Remover</Button>
          </S.Footer>
        </>
      )}
    </S.Wrapper>
  )
}

export default Card
