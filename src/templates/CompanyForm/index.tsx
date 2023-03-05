import Button from 'components/Button'
import { Grid } from 'components/Grid'
import TextInput from 'components/TextInput'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import Base from 'templates/Base'
import { yupResolver } from '@hookform/resolvers/yup'
import { pt } from 'yup-locale-pt'

import * as S from './styles'
import * as yup from 'yup'

yup.setLocale(pt)

const schema = yup
  .object({
    company_name: yup.string().required('Razão Social é obrigatório'),
    trading_name: yup.string().required('Nome fantasia é obrigatório'),
    cnpj: yup.string().required().required('CNPJ123 é obrigatório'),
    cep: yup.string().required().required('CEP é obrigatório'),
    address_name: yup.string().required().required('Endereço é obrigatório'),
    address_number: yup.string().required().required('Número é obrigatório'),
    address_state: yup.string().required().required('Estado é obrigatório'),
    address_district: yup.string().required().required('Cidade é obrigatório'),
    address_complement: yup
      .string()
      .required()
      .required('Complemento é obrigatório')
  })
  .required()

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(schema, { abortEarly: false })
  })

  const handleSubmitForm = (data: FieldValues) => {
    try {
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Title>Cadastro de Empresa</S.Title>

        <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
          <div>
            <Grid>
              <TextInput
                label="Razão Social"
                span="6"
                error={errors?.company_name?.message as string}
                {...register('company_name')}
              />
              <TextInput
                label="Nome Fantasia"
                span="3"
                error={errors?.trading_name?.message as string}
                {...register('trading_name')}
              />
              <TextInput
                label="CNPJ"
                span="3"
                error={errors?.cnpj?.message as string}
                {...register('cnpj')}
              />

              <TextInput
                label="CEP"
                span="3"
                error={errors?.cep?.message as string}
                {...register('cep')}
              />

              <TextInput
                label="Endereço"
                span="6"
                error={errors?.address_name?.message as string}
                {...register('address_name')}
              />

              <TextInput
                label="Número"
                span="3"
                error={errors?.address_number?.message as string}
                {...register('address_number')}
              />

              <TextInput
                label="Estado"
                span="3"
                error={errors?.address_state?.message as string}
                {...register('address_state')}
              />

              <TextInput
                label="Cidade"
                span="3"
                error={errors?.address_district?.message as string}
                {...register('address_district')}
              />

              <TextInput
                label="Complemento"
                span="6"
                error={errors?.address_complement?.message as string}
                {...register('address_complement')}
              />
            </Grid>
          </div>

          <S.ButtonGroupWrapper>
            <Button disabled={isSubmitting} type="submit">
              Confirmar
            </Button>
          </S.ButtonGroupWrapper>
        </S.Form>
      </S.Wrapper>
    </Base>
  )
}
export default CompanyForm
