import { SocketRoom } from '.'
import { ChatUser } from '../chat-user'

export type SocketMessage = {
  id: string
  author: ChatUser
  created_at: Date
  text: string
  room: SocketRoom
}
