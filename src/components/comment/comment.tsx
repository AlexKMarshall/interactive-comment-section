import * as styles from './comment.css'

import { Box, Button, Cluster, Username, VoteCounter } from 'src/components'

import { formatDistance } from 'date-fns'

type Props = {
  user: {
    username: string
    avatarSrc?: string
  }
  isCurrentUser: boolean
  content: string
  createdOn: Date
  replyTo?: string
  votes: number
}
export function Comment({
  user,
  isCurrentUser,
  createdOn,
  content,
  replyTo,
  votes,
}: Props): JSX.Element {
  const commentTimePeriod = formatDistance(createdOn, Date.now())

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
            username={user.username}
            avatarSrc={user.avatarSrc}
            isCurrentUser={isCurrentUser}
          />
          <span>{commentTimePeriod} ago</span>
        </Cluster>
      </div>
      <div className={styles.content}>
        <p>
          {replyTo ? <span>{replyTo} </span> : null} {content}
        </p>
      </div>
      <div className={styles.votes}>
        <VoteCounter value={votes} />
      </div>
      <div className={styles.actions}>
        <Cluster>
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
