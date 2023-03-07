import Button from 'components/Button'
import { Grid } from 'components/Grid'
import TextInput from 'components/TextInput'
import { Controller, useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import Base from 'templates/Base'
import { yupResolver } from '@hookform/resolvers/yup'
import { pt } from 'yup-locale-pt'

import * as S from './styles'
import * as yup from 'yup'
import Select from 'components/Select'
import { Company } from 'core/domain/entities/company'

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
    getValues,
    setError,
    clearErrors,
    control,
    formState: { errors, isSubmitting, isValid }
  } = useForm<Company>({
    resolver: yupResolver(schema, { abortEarly: false }),
    criteriaMode: 'all',
    defaultValues: {
      company_name: '',
      trading_name: '',
      cnpj: '',
      cep: '',
      address_name: '',
      address_number: '',
      address_state: '',
      address_district: '',
      address_complement: ''
    }
  })

  const handleSubmitForm = (data: FieldValues) => {
    try {
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const searchCEP = async (value: string) => {
    const regex = new RegExp(/^\d{5}-\d{3}$/)
    const valido = regex.test(value)

    if (!valido) {
      setError('cep', {
        type: 'custom',
        message: 'CEP inválido'
      })
      return
    }

    clearErrors('cep')
    const response = await fetch(`https://viacep.com.br/ws/${value}/json/`)
    const data = await response.json()

    setValue('address_name', data.logradouro)
    setValue('address_state', data.uf)
    setValue('address_district', data.localidade)
    setValue('address_complement', data.complemento)
  }

  const validateCNPJ = (value: string) => {
    const regex = new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
    const valido = regex.test(value)

    valido
      ? clearErrors('cnpj')
      : setError('cnpj', {
          type: 'custom',
          message: 'CNPJ inválido'
        })
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
                mask="99.999.999/9999-99"
                span="3"
                error={errors?.cnpj?.message as string}
                onInputChange={validateCNPJ}
                {...register('cnpj')}
              />

              <TextInput
                label="CEP"
                mask="99999-999"
                span="3"
                error={errors?.cep?.message as string}
                onInputChange={searchCEP}
                {...register('cep')}
              />

              <Controller
                name="address_name"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Endereço"
                    span="6"
                    error={errors?.address_name?.message as string}
                    initialValue={field.value}
                  />
                )}
              />

              <Controller
                name="address_number"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Número"
                    span="3"
                    error={errors?.address_number?.message as string}
                    initialValue={field.value}
                  />
                )}
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

              <Controller
                name="address_district"
                control={control}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    label="Cidade"
                    span="3"
                    error={errors?.address_district?.message as string}
                    initialValue={field.value}
                  />
                )}
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
