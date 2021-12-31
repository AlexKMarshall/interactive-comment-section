import { Box, Cluster, Stack } from '../layout'
import { Button, Username, VoteCounter } from '..'

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
    <Box component="article" backgroundColor={2} borderRadius={3}>
      <Stack>
        <Cluster>
          <Username
            username={user.username}
            avatarSrc={user.avatarSrc}
            isCurrentUser={isCurrentUser}
          />
          <span>{commentTimePeriod} ago</span>
        </Cluster>
        <p>
          {replyTo ? <span>{replyTo} </span> : null} {content}
        </p>
        <Cluster justify="space-between">
          <VoteCounter value={votes} />
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
        </Cluster>
      </Stack>
    </Box>
  )
}
