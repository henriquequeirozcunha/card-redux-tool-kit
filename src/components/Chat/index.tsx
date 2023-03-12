import { ChatConversation } from 'core/domain/entities'
import { EmojiEmotions } from '@styled-icons/material-outlined/EmojiEmotions'
import { Paperclip } from '@styled-icons/evil/Paperclip'
import { CameraFill } from '@styled-icons/bootstrap/CameraFill'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical'

import * as S from './styles'
import Dropdown from 'components/Dropdown'
import moment from 'moment'

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
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{conversation.receiver.name}</S.Title>

        <S.DropdownActionsWrapper>
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
        </S.DropdownActionsWrapper>
      </S.Header>
      <S.Content>
        {conversation.messages.map((message) => (
          <S.MessageWrapper key={message.id}>
            <S.MessageContent>{message.content}</S.MessageContent>
            <span>{moment(message.created_at).format('DD/MM/YYYY')}</span>
          </S.MessageWrapper>
        ))}
      </S.Content>
      <S.Footer>
        <S.InputWrapper>
          <S.ButtonGroup>
            <S.IconWrapper>
              <EmojiEmotions />
            </S.IconWrapper>
          </S.ButtonGroup>

          <S.InputMessage type="text" name="message" placeholder="Message" />

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
          <S.IconWrapper>
            <SendPlane />
          </S.IconWrapper>
        </S.SubmitButtonWrapper>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Chat
