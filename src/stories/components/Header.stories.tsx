import { Meta, StoryObj } from '@storybook/react'
import Header from '../../components/Header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  argTypes: {
    level: { control: { type: 'range', min: 1, max: 10 } },
    color: { control: 'color' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
  },
  render: (args) => (
    <>
      <Header {...args}>Header</Header>
    </>
  ),
}
