import * as styles from './username.css'

import { Avatar, Badge } from 'src/components'

import { Cluster } from '../layout'
import { sprinkles } from 'src/styles/sprinkles.css'

type Props = {
  username: string
  avatarSrc?: string
  isCurrentUser?: boolean
}
export function Username({
  username,
  avatarSrc,
  isCurrentUser = false,
}: Props): JSX.Element {
  return (
    <Cluster space={3}>
      <Avatar username={username} src={avatarSrc} size="sm" />
      <div
        className={sprinkles({ display: 'flex', gap: 2, alignItems: 'center' })}
      >
        <span className={styles.username}>{username}</span>
        {isCurrentUser ? <Badge size={0}>you</Badge> : null}
      </div>
    </Cluster>
  )
}
