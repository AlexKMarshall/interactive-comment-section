import { CommentList } from 'src/components'
import { createClient } from 'src/schema/generated/genql'
import { useQuery } from 'react-query'

const client = createClient({ url: '/api/graphql' })

export function CommentListScreen(): JSX.Element {
  const fetcher = () =>
    client.query({
      getComments: {
        id: true,
        content: true,
        author: {
          username: true,
          avatarSrc: true,
        },
      },
    })

  const query = useQuery(['comments'], fetcher)

  if (query.isError)
    return (
      <div>
        Error <pre>{JSON.stringify(query.error, null, 2)}</pre>
      </div>
    )
  if (!query.isSuccess) return <div>Loading...</div>

  const comments = query.data.getComments
  const enrichedComments = comments?.map((comment) => ({
    ...comment,
    createdAt: new Date(),
    isCurrentUser: false,
    votes: 0,
  }))

  if (enrichedComments) {
    return <CommentList comments={enrichedComments} />
  }

  return <div>getComments missing</div>
}
