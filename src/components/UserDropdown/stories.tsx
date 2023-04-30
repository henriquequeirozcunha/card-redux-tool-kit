import { Story, Meta } from '@storybook/react'
import UserDropdown from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

export const Basic: Story = (args) => <UserDropdown {...args} />
