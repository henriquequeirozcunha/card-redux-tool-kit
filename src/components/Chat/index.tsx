import { ChatConversation, ChatUser } from 'core/domain/entities'
import { EmojiEmotions } from '@styled-icons/material-outlined/EmojiEmotions'
import { Paperclip } from '@styled-icons/evil/Paperclip'
import { CameraFill } from '@styled-icons/bootstrap/CameraFill'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical'
import { Minimize } from '@styled-icons/material-outlined/Minimize'

import * as S from './styles'
import Dropdown from 'components/Dropdown'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { generateUniqueId } from 'core/application/utils'
import { socket } from 'utils/socket'

type ChatOptions = {
  buttons?: string[]
}

type ChatProps = {
  conversation: ChatConversation
  options?: ChatOptions
}

type ConversationAction = {
  id: string
  label: string
}

const conversationActions: ConversationAction[] = [
  {
    id: 'action_1',
    label: 'Action 1'
  },
  {
    id: 'action_2',
    label: 'Action 2'
  },
  {
    id: 'action_3',
    label: 'Action 3'
  },
  {
    id: 'action_4',
    label: 'Action 4'
  }
]

const Chat = ({ conversation }: ChatProps) => {
  const [currentConversation, setCurrentConversation] = useState(conversation)
  const [currentMessage, setCurrentMessage] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(true)
  const divContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    divContentRef?.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  }, [divContentRef?.current?.lastElementChild])

  const socketInitializer = async () => {
    socket.on('newIncomingMessage', (socketResult: any) => {
      const adminUser: ChatUser = {
        id: generateUniqueId(),
        name: 'ADMIN'
      }

      setCurrentConversation({
        ...currentConversation,
        messages: [
          ...currentConversation.messages,
          {
            id: generateUniqueId(),
            content: socketResult.message,
            creator: adminUser,
            receiver: currentConversation.receiver,
            created_at: moment().toDate()
          }
        ]
      })
    })
  }

  useEffect(() => {
    socketInitializer()
  }, [])

  const handleSendMessage = () => {
    if (socket) {
      socket.emit('createdMessage', {
        message: currentMessage
      })
    }

    setCurrentConversation({
      ...currentConversation,
      messages: [
        ...currentConversation.messages,
        {
          id: generateUniqueId(),
          content: currentMessage,
          creator: currentConversation.creator,
          receiver: currentConversation.receiver,
          created_at: moment().toDate()
        }
      ]
    })

    divContentRef?.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  }

  return (
    <S.Wrapper isCollapsed={isCollapsed}>
      <S.Header>
        <S.Title>{currentConversation.receiver.name}</S.Title>

        <S.DropdownActionsWrapper>
          <S.IconWrapper onClick={() => setIsCollapsed(!isCollapsed)}>
            <Minimize />
          </S.IconWrapper>

          {!isCollapsed && (
            <Dropdown
              showOverlay={false}
              title={
                <S.IconWrapper>
                  <ThreeDotsVertical color="white" />
                </S.IconWrapper>
              }
            >
              {conversationActions.map((action) => (
                <div key={action.id}>{action.label}</div>
              ))}
            </Dropdown>
          )}
        </S.DropdownActionsWrapper>
      </S.Header>
      <S.Content isCollapsed={isCollapsed}>
        {currentConversation.messages.map((message) => (
          <S.MessageWrapper
            ref={divContentRef}
            key={message.id}
            alignment={
              message.creator.id === currentConversation.creator.id
                ? 'flex-start'
                : 'flex-end'
            }
          >
            <S.MessageContent>{message.content}</S.MessageContent>
            <span>{moment(message.created_at).format('DD/MM/YYYY')}</span>
          </S.MessageWrapper>
        ))}
      </S.Content>
      <S.Footer isCollapsed={isCollapsed}>
        <S.InputWrapper>
          <S.ButtonGroup>
            <S.IconWrapper>
              <EmojiEmotions />
            </S.IconWrapper>
          </S.ButtonGroup>

          <S.InputMessage
            type="text"
            name="message"
            placeholder="Message"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />

          <S.ButtonGroup>
            <S.IconWrapper>
              <Paperclip />
            </S.IconWrapper>
            <S.IconWrapper>
              <CameraFill />
            </S.IconWrapper>
          </S.ButtonGroup>
        </S.InputWrapper>

        <S.SubmitButtonWrapper>
          <S.IconWrapper onClick={() => handleSendMessage()}>
            <SendPlane />
          </S.IconWrapper>
        </S.SubmitButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Chat
