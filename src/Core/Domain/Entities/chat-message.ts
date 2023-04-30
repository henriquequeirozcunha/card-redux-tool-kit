import { ChatUser } from '.'

export type ChatMessage = {
  id: string
  creator: ChatUser
  receiver: ChatUser
  content: React.ReactNode
  created_at: Date
}
