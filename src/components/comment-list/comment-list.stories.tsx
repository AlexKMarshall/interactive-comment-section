import * as commentStories from 'src/components/comment/comment.stories'
import * as usernameStories from 'src/components/username/username.stories'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CommentList } from 'src/components'
import { ComponentProps } from 'react'
import { colorTokens } from 'src/styles/color.css'

const meta: ComponentMeta<typeof CommentList> = {
  title: 'Components/CommentList',
  component: CommentList,
  includeStories: /^[A-Z]/,
  parameters: {
    backgrounds: {
      default: 'Very Light Grey',
      values: [{ name: 'Very Light Grey', value: colorTokens.veryLightGray }],
    },
  },
}

export default meta

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
)

export const defaultArgs: ComponentProps<typeof CommentList> = {
  comments: [
    { id: '1', ...commentStories.defaultArgs },
    {
      id: '2',
      ...commentStories.defaultArgs,
      ...commentStories.CurrentUser.args,
    },
  ],
}
export const Default = Template.bind({})
Default.args = defaultArgs
