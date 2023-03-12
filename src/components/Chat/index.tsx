import { ChatConversation } from 'core/domain/entities'
import { EmojiEmotions } from '@styled-icons/material-outlined/EmojiEmotions'
import { Paperclip } from '@styled-icons/evil/Paperclip'
import { CameraFill } from '@styled-icons/bootstrap/CameraFill'
import { SendPlane } from '@styled-icons/remix-fill/SendPlane'

import * as S from './styles'

type ChatOptions = {
  buttons?: string[]
}

type ChatProps = {
  conversation: ChatConversation
  options?: ChatOptions
}

const Chat = ({ conversation }: ChatProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{conversation.receiver.name}</S.Title>
      </S.Header>
      <S.Content>
        {conversation.messages.map((message) => (
          <S.Message key={message.id}>{message.content}</S.Message>
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
