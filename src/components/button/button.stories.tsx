import { Button } from 'src/components'
import { ComponentMeta } from '@storybook/react'
import Icon from 'src/components/icon/icon.stories'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    ...Icon.argTypes,
  },
}

export default meta

export const Default = {
  args: {
    label: 'Press Me',
  },
}

export const WithIcon = {
  args: {
    ...Default.args,
    icon: 'Reply',
    label: 'Reply',
  },
}

export const Critical = {
  args: {
    ...Default.args,
    color: 'critical',
    icon: 'Delete',
    label: 'Delete',
  },
}

export const Hover = { ...Default, parameters: { pseudo: { hover: true } } }
