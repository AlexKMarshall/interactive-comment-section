import * as commentStories from 'src/components/comment/comment.stories'

import { CommentList } from 'src/components'
import { ComponentMeta } from '@storybook/react'
import { ComponentProps } from 'react'
import { colorTokens } from 'src/styles/color.css'

const meta: ComponentMeta<typeof CommentList> = {
  title: 'Components/CommentList',
  component: CommentList,
  includeStories: /^[A-Z]/,
  parameters: {
    backgrounds: {
      default: 'Very Light Grey',
      values: [
        {
          name: 'Very Light Grey',
          value: colorTokens.veryLightGray,
        },
      ],
    },
  },
}
export default meta

export const defaultArgs: ComponentProps<typeof CommentList> = {
  comments: [
    {
      id: '1',
      ...commentStories.Default.args,
    },
    {
      id: '2',
      ...commentStories.Default.args,
      ...commentStories.CurrentUser.args,
    },
  ],
}
export const Default = {
  args: defaultArgs,
}
