import { Meta, StoryObj } from '@storybook/react'
import Image from '../../components/Image'

const meta: Meta<typeof Image> = {
  component: Image,
}

export default meta
type Story = StoryObj<typeof Image>

export const Default: Story = {
  argTypes: {
    lazy: {
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    width: {
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: 'string',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    block: {
      control: { type: 'boolean' },
    },
    threshold: {
      control: { type: 'number' },
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    placeholder: 'https://via.placeholder.com/200',
    width: 200,
    height: 200,
    mode: 'cover',
    block: false,
    threshold: 0.5,
  },
  render: (args) => (
    <>
      <Image {...args} />
      <Image {...args} />
    </>
  ),
}

export const Lazy: Story = {
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    ...Default.args,
    lazy: true,
  },
  render: (args) => (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  ),
}
