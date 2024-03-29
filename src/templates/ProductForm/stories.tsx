import { Story, Meta } from '@storybook/react'
import ProductForm from '.'

export default {
  title: 'ProductForm',
  component: ProductForm
} as Meta

export const Basic: Story = (args) => <ProductForm {...args} />
