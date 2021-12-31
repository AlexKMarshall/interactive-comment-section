import { Button, Username, VoteCounter } from '..'

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
  const commentTimePeriod = `${createdOn}`

  return (
    <article>
      <Username
        username={user.username}
        avatarSrc={user.avatarSrc}
        isCurrentUser={isCurrentUser}
      />
      <span>{commentTimePeriod}</span>
      <p>
        {replyTo ? <span>{replyTo} </span> : null} {content}
      </p>
      <VoteCounter value={votes} />
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
    </article>
  )
}
