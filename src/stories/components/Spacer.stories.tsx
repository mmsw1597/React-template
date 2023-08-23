import { Meta, StoryObj } from '@storybook/react'
import { CSSProperties } from 'react'
import Spacer from '../../components/Spacer'

const meta: Meta<typeof Spacer> = {
  component: Spacer,
}

export default meta
type Story = StoryObj<typeof Spacer>

const Box = ({
  block = false,
  style,
}: {
  block?: boolean
  style?: CSSProperties
}) => {
  return (
    <div
      style={{
        display: block ? 'block' : 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        ...style,
      }}
    />
  )
}

export const Horizontal: Story = {
  argTypes: {
    size: {
      control: { type: 'range', min: 8, max: 64 },
    },
  },
  render: (args) => (
    <Spacer {...args} type="horizontal">
      <Box />
      <Box />
      <Box />
    </Spacer>
  ),
}

export const Vertical: Story = {
  argTypes: {
    ...Horizontal.argTypes,
  },
  render: (args) => (
    <Spacer {...args} type="vertical">
      <Box block />
      <Box block />
      <Box block />
    </Spacer>
  ),
}
