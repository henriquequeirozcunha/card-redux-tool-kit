import { Story, Meta } from '@storybook/react'
import AppChat from '.'

export default {
  title: 'AppChat',
  component: AppChat
} as Meta

export const Basic: Story = (args) => <AppChat {...args} />
