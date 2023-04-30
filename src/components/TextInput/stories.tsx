import { Story, Meta } from '@storybook/react'
import TextInput from '.'

export default {
  title: 'TextInput',
  component: TextInput
} as Meta

export const Basic: Story = (args) => <TextInput {...args} />
