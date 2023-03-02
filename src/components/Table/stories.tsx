import { Story, Meta } from '@storybook/react'
import Table from '.'

export default {
  title: 'Table',
  component: Table
} as Meta

export const Basic: Story = (args) => <Table {...args} />
