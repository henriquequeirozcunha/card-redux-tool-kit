import { Story, Meta } from '@storybook/react'
import AppDataTable from '.'

export default {
  title: 'AppDataTable',
  component: AppDataTable
} as Meta

export const Basic: Story = (args) => <AppDataTable {...args} />
