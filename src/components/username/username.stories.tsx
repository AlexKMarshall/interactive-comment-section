import * as avatarStories from 'src/components/avatar/avatar.stories'

import { ComponentMeta } from '@storybook/react'
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

export const Default = {
  args: {
    username: avatarStories.Default.args.username,
    avatarSrc: avatarStories.Default.args.src,
  },
}
export const CurrentUser = {
  args: { ...Default.args, isCurrentUser: true },
}
