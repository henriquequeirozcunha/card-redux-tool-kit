import { generateUniqueId } from 'core/application/utils'
import { ChatConversation, ChatMessage, ChatUser } from 'core/domain/entities'
import moment from 'moment'

const mockUsers: ChatUser[] = [
  {
    id: generateUniqueId(),
    name: 'Henrique Queiroz Cunha'
  },
  {
    id: generateUniqueId(),
    name: 'Flávio Henrique Bessa Cunha'
  }
]

const creator = mockUsers[0]
const receiver = mockUsers[1]

const momentNow = moment()

const mockMessages: ChatMessage[] = [
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Oi Creator',
    created_at: momentNow.toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Oi Reciver',
    created_at: momentNow.add(1, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Mensagem 1 Creator',
    created_at: momentNow.add(2, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Mensagem 2 receiver',
    created_at: momentNow.add(3, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Mensagem 3 Creator',
    created_at: momentNow.add(3, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Mensagem 8 receiver',
    created_at: momentNow.add(8, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Mensagem 5 Creator',
    created_at: momentNow.add(5, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Mensagem 6 receiver',
    created_at: momentNow.add(6, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Mensagem 7 Creator',
    created_at: momentNow.add(7, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Mensagem 8 receiver',
    created_at: momentNow.add(8, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    content: 'Mensagem 9 Creator',
    created_at: momentNow.add(9, 'minute').toDate()
  },
  {
    id: generateUniqueId(),
    creator: receiver,
    receiver: creator,
    content: 'Mensagem 10 receiver',
    created_at: momentNow.add(10, 'minute').toDate()
  }
]

export const mockConversations: ChatConversation[] = [
  {
    id: generateUniqueId(),
    creator,
    receiver,
    messages: mockMessages
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    messages: mockMessages
  },
  {
    id: generateUniqueId(),
    creator,
    receiver,
    messages: mockMessages
  }
]
