import * as avatarStories from 'src/components/avatar/avatar.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ComponentProps } from 'react'
import { Username } from 'src/components'

const avatarArgTypes = avatarStories.default.argTypes

const meta: ComponentMeta<typeof Username> = {
  title: 'Components/Username',
  component: Username,
  argTypes: {
    avatarSrc: avatarArgTypes?.src,
  },
  includeStories: /^[A-Z]/,
}

export default meta

const Template: ComponentStory<typeof Username> = (args) => (
  <Username {...args} />
)

export const defaultArgs: ComponentProps<typeof Username> = {
  username: avatarStories.defaultArgs.username,
  avatarSrc: avatarStories.defaultArgs.src,
}

export const Default = Template.bind({})
Default.args = defaultArgs

export const CurrentUser = Template.bind({})
CurrentUser.args = {
  ...Default.args,
  isCurrentUser: true,
}
