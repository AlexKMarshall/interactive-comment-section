import { Comment, Stack } from 'src/components'

type Comment = {
  id: string
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

type Props = {
  comments: Comment[]
}
export function CommentList({ comments }: Props): JSX.Element {
  return (
    <Stack component="ul" role="list">
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))}
    </Stack>
  )
}
