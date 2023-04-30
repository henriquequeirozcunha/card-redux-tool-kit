import ProductDetail from 'components/ProductDetail'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/configureStore'
import {
  getProductAsync,
  productSelectors,
  setProduct
} from 'store/productSlice'
import Base from 'templates/Base'
import * as S from './styles'

const Product = () => {
  const dispatch = useAppDispatch()
  const routes = useRouter()
  const { id: productId } = routes.query
  const product = useAppSelector((state) =>
    productSelectors.selectById(state, productId as string)
  )

  useEffect(() => {
    if (!product) {
      dispatch(getProductAsync({ id: productId as string }))
    }
  }, [product, dispatch, productId])

  if (!productId) {
    return (
      <Link href="/" passHref>
        <a>Go to home</a>
      </Link>
    )
  }

  if (!product) {
    return <h1>Loading</h1>
  }

  return (
    <Base>
      <S.Wrapper>
        <ProductDetail product={product} />
      </S.Wrapper>
    </Base>
  )
}

export default Product
