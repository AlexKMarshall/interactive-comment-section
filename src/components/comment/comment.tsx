import * as styles from './comment.css'

import { Box, Button, Cluster, Username, VoteCounter } from 'src/components'

import { formatDistance } from 'date-fns'

type Props = {
  author: {
    username: string
    avatarSrc?: string
  }
  isCurrentUser: boolean
  content: string
  createdAt: Date
  replyTo?: string
  votes: number
}
export function Comment({
  author,
  isCurrentUser,
  createdAt,
  content,
  replyTo,
  votes,
}: Props): JSX.Element {
  const commentTimePeriod = formatDistance(createdAt, Date.now())

  return (
    <Box
      component="article"
      backgroundColor={2}
      borderRadius={3}
      className={styles.comment}
    >
      <div className={styles.meta}>
        <Cluster>
          <Username
            username={author.username}
            avatarSrc={author.avatarSrc}
            isCurrentUser={isCurrentUser}
          />
          <span>{commentTimePeriod} ago</span>
        </Cluster>
      </div>
      <div className={styles.content}>
        <p>
          {replyTo ? <span className={styles.replyTo}>{replyTo} </span> : null}{' '}
          {content}
        </p>
      </div>
      <div className={styles.votes}>
        <VoteCounter
          value={votes}
          orientation={{ all: 'horizontal', 'md-n-above': 'vertical' }}
        />
      </div>
      <div className={styles.actions}>
        <Cluster justify="flex-end">
          {isCurrentUser ? (
            <>
              <Button
                icon="Delete"
                label="Delete"
                color="critical"
                onClick={() => {}}
              />
              <Button icon="Edit" label="Edit" onClick={() => {}} />
            </>
          ) : (
            <Button icon="Reply" label="Reply" onClick={() => {}} />
          )}
        </Cluster>
      </div>
    </Box>
  )
}
