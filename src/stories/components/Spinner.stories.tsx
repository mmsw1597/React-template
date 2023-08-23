import { Meta, StoryObj } from '@storybook/react'
import Spinner from '../../components/Spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 24,
    loading: true,
  },
  render: (args) => <Spinner {...args} />,
}
