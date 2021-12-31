import * as usernameStories from 'src/components/username/username.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Comment } from 'src/components'
import { ComponentProps } from 'react'
import { colorTokens } from 'src/styles/color.css'

const meta: ComponentMeta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
  includeStories: /^[A-Z]/,
  parameters: {
    backgrounds: {
      default: 'Very Light Grey',
      values: [{ name: 'Very Light Grey', value: colorTokens.veryLightGray }],
    },
  },
}

export default meta

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const defaultArgs: ComponentProps<typeof Comment> = {
  user: usernameStories.defaultArgs,
  isCurrentUser: false,
  content: 'This is a comment',
  createdOn: new Date(Date.now() - 1000 * 60 * 60 * 48),
  votes: 0,
}
export const Default = Template.bind({})
Default.args = defaultArgs
