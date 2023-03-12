import { ChatMessage, ChatUser } from '.'

export type ChatConversation = {
  id: string
  creator: ChatUser
  receiver: ChatUser
  messages: ChatMessage[]
}
