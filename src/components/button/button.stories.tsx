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
  children: 'Reply',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'Reply',
}
