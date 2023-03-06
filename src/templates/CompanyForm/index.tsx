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
import Select from 'components/Select'

yup.setLocale(pt)

const schema = yup
  .object({
    company_name: yup.string().required('Razão Social é obrigatório'),
    trading_name: yup.string().required('Nome fantasia é obrigatório'),
    cnpj: yup.string().required('CNPJ é obrigatório'),
    cep: yup.string().required('CEP é obrigatório'),
    address_name: yup.string().required('Endereço é obrigatório'),
    address_number: yup.string().required('Número é obrigatório'),
    address_state: yup.string().required('Estado é obrigatório'),
    address_district: yup.string().required('Cidade é obrigatório'),
    address_complement: yup.string().required('Complemento é obrigatório')
  })
  .required()

const listStates = [
  {
    label: 'Pernambuco',
    value: 'PE'
  },
  {
    label: 'Paraíba',
    value: 'PB'
  },
  {
    label: 'Rio Grande do Norte',
    value: 'RN'
  },
  {
    label: 'Rio de Janeiro',
    value: 'RJ'
  },
  {
    label: 'São Paulo',
    value: 'SP'
  }
]

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
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
            <input type="button" onClick={() => console.log(errors)} />
          </div>
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
                mask="99999-999"
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

              <Select
                span="3"
                title="Estado"
                title_position="float"
                error={errors?.address_state?.message as string}
                {...register('address_state')}
                options={listStates.map(({ label, value }) => ({
                  label,
                  value
                }))}
                onInputChange={(itemsSelected) => {
                  setValue('address_state', itemsSelected[0].value)
                }}
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
            <Button
              disabled={isSubmitting}
              loading={isSubmitting}
              type="submit"
            >
              Confirmar
            </Button>
          </S.ButtonGroupWrapper>
        </S.Form>
      </S.Wrapper>
    </Base>
  )
}
export default CompanyForm
