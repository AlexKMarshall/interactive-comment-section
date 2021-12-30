import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Reply',
}
