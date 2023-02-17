import Button from 'components/Button'
import TextInput from 'components/TextInput'
import { Product } from 'core/domain/entities'
import { useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'

const defaultValues: Product = {
  id: '',
  name: '',
  price: 0
}

const ProductForm = () => {
  const [product, setProduct] = useState(defaultValues)

  const handleInput = (property: string, value: string) => {
    setProduct({ ...product, [property]: value })
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Title>ProductForm</S.Title>

        <S.Content>
          <S.Row>
            <TextInput
              label="Nome"
              property="name"
              span="3"
              onInputChange={(v) => handleInput('name', v)}
            />

            <TextInput
              label="Descrição"
              property="description"
              span="5"
              onInputChange={(v) => handleInput('description', v)}
            />
          </S.Row>

          <S.Row>
            <TextInput
              label="Categoria"
              property="category"
              span="full"
              onInputChange={(v) => handleInput('category', v)}
            />
          </S.Row>
        </S.Content>

        <S.Footer>
          <Button onClick={() => console.log('values', product)}>
            Confirmar
          </Button>
        </S.Footer>
      </S.Wrapper>
    </Base>
  )
}

export default ProductForm
