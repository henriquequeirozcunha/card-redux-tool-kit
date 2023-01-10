import { useRouter } from 'next/dist/client/router'
import Product from 'templates/Product'

export default function Index() {
  const routes = useRouter()
  const { query } = routes

  console.log('query', query)

  return <Product />
}
