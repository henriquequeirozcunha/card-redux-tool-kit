import { Story, Meta } from '@storybook/react'
import ToastNotification from '.'

export default {
  title: 'ToastNotification',
  component: ToastNotification
} as Meta

export const Basic: Story = (args) => <ToastNotification {...args} />
