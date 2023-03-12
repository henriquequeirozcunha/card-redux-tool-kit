import { Story, Meta } from '@storybook/react'
import ChatConversationPage from '.'

export default {
  title: 'ChatConversationPage',
  component: ChatConversationPage
} as Meta

export const Basic: Story = (args) => <ChatConversationPage {...args} />
