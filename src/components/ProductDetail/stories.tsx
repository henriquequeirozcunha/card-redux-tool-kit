import { Story, Meta } from '@storybook/react'
import ProductDetail from '.'

export default {
  title: 'ProductDetail',
  component: ProductDetail
} as Meta

export const Basic: Story = (args) => <ProductDetail {...args} />
