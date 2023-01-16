import { Story, Meta } from '@storybook/react'
import Basket from '.'

export default {
  title: 'Basket',
  component: Basket
} as Meta

export const Basic: Story = (args) => <Basket {...args} />
