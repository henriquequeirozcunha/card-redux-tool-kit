import { Story, Meta } from '@storybook/react'
import Chat from '.'

export default {
  title: 'Chat',
  component: Chat
} as Meta

export const Basic: Story = (args) => <Chat {...args} />
