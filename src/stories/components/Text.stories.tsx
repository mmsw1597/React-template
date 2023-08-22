import type { Meta, StoryObj } from '@storybook/react'
import Text from '../../components/Text'

const meta: Meta<typeof Text> = {
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  argTypes: {
    size: { control: 'number' },
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    mark: { control: 'boolean' },
    code: { control: 'boolean' },
    color: { control: 'color' },
  },
  render: (args) => (
    <>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
    </>
  ),
}
