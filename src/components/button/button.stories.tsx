import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'
import Icon from 'src/components/icon/icon.stories'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    ...Icon.argTypes,
  },
}

export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Press Me',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'Reply',
  label: 'Reply',
}

export const Critical = Template.bind({})
Critical.args = {
  ...Default.args,
  color: 'critical',
  icon: 'Delete',
  label: 'Delete',
}

export const Hover = Template.bind({})
Hover.args = {
  ...Default.args,
}
Hover.parameters = {
  pseudo: {
    hover: true,
  },
}
