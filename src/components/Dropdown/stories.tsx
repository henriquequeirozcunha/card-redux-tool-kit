import { Story, Meta } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

export const Basic: Story = (args) => <Dropdown {...args} />
