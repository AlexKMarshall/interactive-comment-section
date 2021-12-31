import * as avatarStories from 'src/components/avatar/avatar.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Username } from '.'

const avatarArgTypes = avatarStories.default.argTypes

const meta: ComponentMeta<typeof Username> = {
  title: 'Components/Username',
  component: Username,
  argTypes: {
    avatarSrc: avatarArgTypes?.src,
  },
}

export default meta

const Template: ComponentStory<typeof Username> = (args) => (
  <Username {...args} />
)

export const Default = Template.bind({})
Default.args = {
  username: avatarStories.Default.args?.username,
  avatarSrc: avatarStories.Default.args?.src,
}

export const CurrentUser = Template.bind({})
CurrentUser.args = {
  ...Default.args,
  isCurrentUser: true,
}
