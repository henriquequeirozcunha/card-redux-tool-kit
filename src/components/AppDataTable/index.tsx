import DataTable, { TableProps } from 'react-data-table-component'
import * as S from './styles'

const AppDataTable = <T extends unknown>(props: TableProps<T>) => (
  <S.Wrapper>
    <DataTable
      pagination
      // selectableRowsComponent={Checkbox}
      // selectableRowsComponentProps={selectProps}
      // sortIcon={sortIcon}
      dense
      {...props}
    />
  </S.Wrapper>
)

export default AppDataTable
