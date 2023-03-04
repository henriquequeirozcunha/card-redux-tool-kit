import { Grid } from 'components/Grid'
import TextInput from 'components/TextInput'
import Base from 'templates/Base'
import * as S from './styles'

const CompanyForm = () => {
  const handleInput = <Type extends unknown = string>(
    property: string,
    value: Type
  ) => {
    //    setProduct({ ...product, [property]: value })
  }

  return (
    <Base>
      <S.Wrapper>
        <S.Title>Cadastro de Empresa</S.Title>

        <form>
          <Grid>
            <TextInput
              label="Razão Social"
              property="company_name"
              span="6"
              onInputChange={(v) => handleInput('company_name', v)}
            />
            <TextInput
              label="Nome Fantasia"
              property="trading_name"
              span="3"
              onInputChange={(v) => handleInput('trading_name', v)}
            />
            <TextInput
              label="CNPJ"
              property="cnpj"
              span="4"
              onInputChange={(v) => handleInput('cnpj', v)}
            />
          </Grid>
        </form>
      </S.Wrapper>
    </Base>
  )
}
export default CompanyForm
