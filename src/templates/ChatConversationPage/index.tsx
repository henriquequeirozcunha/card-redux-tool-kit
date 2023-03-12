import AppDataTable from 'components/AppDataTable'
import { Company } from 'core/domain/entities/company'
import moment from 'moment'
import { TableColumn } from 'react-data-table-component'
import Base from 'templates/Base'
import { mockCompanies, mockConversations } from '../../../tests/mocks'
import Checkbox from 'components/Checkbox'

import * as S from './styles'
import Chat from 'components/Chat'

const columns: TableColumn<Company>[] = [
  {
    name: 'Razão Social',
    selector: (row) => row.company_name,
    grow: 4,
    sortable: true,
    reorder: true
  },
  {
    name: 'Nome Fantasia',
    selector: (row) => row.trading_name,
    sortable: true,
    reorder: true
  },
  {
    name: 'CNPJ',
    selector: (row) => row.cnpj,
    sortable: true,
    reorder: true
  },
  {
    name: 'Data Criação',
    selector: (row) => moment(row.created_at).format('YYYY-MM-DD')
  },
  {
    name: 'Suspensa',
    selector: (row) => !!row.suspended,
    cell: (row, rowIndex, column) => (
      <Checkbox
        showLabel={false}
        label={column.name!.toString()}
        labelFor={`suspended_company_id_${rowIndex}`}
        onCheck={() => console.log('teste')}
      />
    )
  }
]

const showTable = false

const ChatConversationPage = () => (
  <Base>
    <S.Wrapper>
      <S.ConversationsWrapper>
        {mockConversations.map((conversation) => (
          <Chat key={conversation.id} conversation={conversation} />
        ))}
      </S.ConversationsWrapper>

      {showTable && (
        <AppDataTable
          title="Empresas Cadastradas"
          columns={columns}
          data={mockCompanies}
        />
      )}
    </S.Wrapper>
  </Base>
)

export default ChatConversationPage
