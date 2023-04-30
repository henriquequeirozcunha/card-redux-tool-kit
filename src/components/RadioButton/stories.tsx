import { Story, Meta } from '@storybook/react'
import RadioButton from '.'

export default {
  title: 'RadioButton',
  component: RadioButton
} as Meta

export const Basic: Story = (args) => <RadioButton {...args} />
