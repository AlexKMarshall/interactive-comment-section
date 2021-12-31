import * as styles from './badge.css'

import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'

import clsx from 'clsx'

type Props = {
  children: string
  size?: Sprinkles['fontSize']
}
export function Badge({ children, size = 1 }: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({ fontSize: size })

  return (
    <span className={clsx(styles.badge, sprinklesClassNames)}>{children}</span>
  )
}
