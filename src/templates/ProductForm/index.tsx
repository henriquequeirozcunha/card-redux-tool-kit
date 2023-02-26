import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Select from 'components/Select'
import TextInput from 'components/TextInput'
import { Product } from 'core/domain/entities'
import { useState } from 'react'
import Base from 'templates/Base'
import * as S from './styles'

const defaultValues: Product = {
  id: '',
  name: '',
  price: 0,
  suspended: false
}

const listCategories: {
  label: string
  value: string
  is_principal?: boolean
}[] = [
  { label: 'Eletrônicos', value: '1', is_principal: true },
  { label: 'Limpeza', value: '2' },
  { label: 'Construção', value: '3' },
  { label: 'Outros', value: '4' }
]

const listTags: {
  label: string
  value: string
  is_principal?: boolean
}[] = [
  { label: 'Alto Custo', value: '1', is_principal: true },
  { label: 'Precisa Autorização', value: '2' },
  { label: 'Urgente', value: '3' },
  { label: 'Outros', value: '4' }
]

const ProductForm = () => {
  const [product, setProduct] = useState(defaultValues)

  function handleInput<Type = string>(property: string, value: Type) {
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
              span="8"
              onInputChange={(v) => handleInput('category', v)}
            />

            <Checkbox
              label="Suspenso"
              labelFor="suspended"
              onCheck={(status) => handleInput<boolean>('suspended', status)}
            />
          </S.Row>

          <S.Row>
            <Select span="4" title="Categoria" options={listCategories} />

            <Select span="4" isMultiple title="Tags" options={listTags} />
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
