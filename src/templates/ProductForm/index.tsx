import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Select from 'components/Select'
import TextInput from 'components/TextInput'
import { Category, Product, Tag } from 'core/domain/entities'
import { useState } from 'react'
import { useAppDispatch } from 'store/configureStore'
import { addProductAsync } from 'store/productSlice'
import Base from 'templates/Base'
import * as S from './styles'
import * as yup from 'yup'
import { FieldError, parseYupValidation } from 'validations'
import { Grid } from 'components/Grid'

const defaultValues: Product = {
  id: '',
  name: '',
  price: 0,
  suspended: false
}

const listCategories: Category[] = [
  { name: 'Eletrônicos', id: '1', is_principal: true },
  { name: 'Limpeza', id: '2' },
  { name: 'Construção', id: '3' },
  { name: 'Outros', id: '4' }
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

const schema = yup.object({
  id: yup.string().optional(),
  name: yup.string().required(),
  price: yup.number().min(0).required(),
  picture_url: yup.string().optional(),
  wishList: yup.boolean().optional(),
  description: yup.string().required(),
  category_id: yup.string().required(),
  suspended: yup.boolean().default(false),
  tags: yup
    .array()
    .of(
      yup.object({
        id: yup.string().required(),
        name: yup.string().required()
      })
    )
    .min(1)
})

const ProductForm = () => {
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState(defaultValues)
  const [errors, setErrors] = useState<FieldError>({})

  function handleInput<Type = string>(property: string, value: Type) {
    setProduct({ ...product, [property]: value })
  }

  const handleSubmit = async () => {
    try {
      await schema.validate(product, { abortEarly: false })

      dispatch(addProductAsync({ product: product }))
    } catch (error: any) {
      const errorParssed = error as yup.ValidationError
      const parsedErrors = parseYupValidation(errorParssed)

      setErrors(parsedErrors)
    }
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Title>Cadastro do Produto</S.Title>

        <S.Content>
          <Grid>
            <TextInput
              label="Nome"
              name="name"
              span="3"
              error={errors?.name}
              onInputChange={(v) => handleInput('name', v)}
            />

            <TextInput
              label="Descrição"
              name="description"
              span="5"
              error={errors?.description}
              onInputChange={(v) => handleInput('description', v)}
            />

            <Checkbox
              label="Suspenso"
              labelFor="suspended"
              onCheck={(status) => handleInput<boolean>('suspended', status)}
            />
          </Grid>

          <Grid>
            <Select
              span="4"
              title="Categoria"
              options={listCategories.map((item) => ({
                label: item.name,
                value: item.id,
                is_principal: item.is_principal
              }))}
              onInputChange={(selectedList) =>
                handleInput<Category>('categories', {
                  id: selectedList[0].value,
                  name: selectedList[0].label
                })
              }
            />

            <Select
              span="5"
              isMultiple
              title="Tags"
              options={listTags}
              onInputChange={(selectedList) =>
                handleInput<Tag[]>(
                  'tag',
                  selectedList.map((item) => ({
                    id: item.value,
                    name: item.label
                  }))
                )
              }
            />
          </Grid>
        </S.Content>

        <S.Footer>
          <Button onClick={() => handleSubmit()}>Confirmar</Button>
        </S.Footer>
      </S.Wrapper>
    </Base>
  )
}

export default ProductForm
