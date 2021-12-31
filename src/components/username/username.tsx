import * as styles from './username.css'

import { Avatar, Badge } from 'src/components'

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
    <div className={styles.usernameWrapper}>
      <Avatar username={username} src={avatarSrc} />
      <span className={styles.username}>{username}</span>
      {isCurrentUser ? <Badge size={0}>you</Badge> : null}
    </div>
  )
}
