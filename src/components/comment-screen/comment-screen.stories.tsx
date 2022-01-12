import * as commentListStories from 'src/components/comment-list/comment-list.stories'

import { CommentScreen } from 'src/components'
import { ComponentMeta } from '@storybook/react'
import { colorTokens } from 'src/styles/color.css'
import { graphql } from 'msw'

const meta: ComponentMeta<typeof CommentScreen> = {
  title: 'Components/CommentScreen',
  component: CommentScreen,
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

export const Default = {
  parameters: {
    msw: [
      graphql.query('getComments', (req, res, ctx) => {
        return res(
          ctx.data({
            getComments: commentListStories.Default.args.comments,
          })
        )
      }),
    ],
  },
}
