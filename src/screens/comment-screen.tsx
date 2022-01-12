import { CommentList } from 'src/components'
import { createClient } from 'src/schema/generated/genql'
import { parseJSON } from 'date-fns'
import { useQuery } from 'react-query'

const client = createClient({ url: '/api/graphql' })

function useComments() {
  const fetcher = () =>
    client
      .query({
        getComments: {
          id: true,
          content: true,
          author: {
            username: true,
            avatarSrc: true,
          },
          createdAt: true,
        },
      })
      .then((data) =>
        data.getComments?.map((comment) => ({
          ...comment,
          createdAt: parseJSON(comment.createdAt),
          isCurrentUser: false,
          votes: 0,
        }))
      )

  return useQuery(['comments'], fetcher)
}

export function CommentScreen(): JSX.Element {
  const query = useComments()

  if (query.isError)
    return (
      <div>
        Error <pre>{JSON.stringify(query.error, null, 2)}</pre>
      </div>
    )
  if (!query.isSuccess) return <div>Loading...</div>

  const comments = query.data

  if (comments) {
    return <CommentList comments={comments} />
  }

  return <div>getComments missing</div>
}
