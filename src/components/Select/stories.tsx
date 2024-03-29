import { Story, Meta } from '@storybook/react'
import Select from '.'

export default {
  title: 'Select',
  component: Select
} as Meta

export const Basic: Story = (args) => <Select {...args} />
