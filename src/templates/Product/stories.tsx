import { Story, Meta } from '@storybook/react'
import Product from '.'

export default {
  title: 'Product',
  component: Product
} as Meta

export const Basic: Story = (args) => <Product {...args} />
