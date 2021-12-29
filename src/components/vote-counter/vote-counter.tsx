import * as styles from './vote-counter.css'

import {
  ResponsiveValue,
  mapResponsiveValue,
  sprinkles,
} from 'src/styles/sprinkles.css'

import { Icon } from '..'
import clsx from 'clsx'

type ResponsiveOrientation = ResponsiveValue<'horizontal' | 'vertical'>

const orientationToFlexDirection = {
  horizontal: 'row',
  vertical: 'column',
} as const

type Props = {
  value?: number
  onUpVote?: (val: number) => void
  onDownVote?: (val: number) => void
  orientation?: ResponsiveOrientation
}
export function VoteCounter({
  value = 0,
  onUpVote,
  onDownVote,
  orientation = 'horizontal',
}: Props): JSX.Element {
  const handleUpVote = () => onUpVote?.(value + 1)
  const handleDownVote = () => onDownVote?.(value - 1)

  const flexDirection = mapResponsiveValue(
    orientation,
    (value) => orientationToFlexDirection[value]
  )

  const sprinklesClassNames = sprinkles({ flexDirection })

  return (
    <div className={clsx(styles.wrapper, sprinklesClassNames)}>
      <button
        className={styles.button}
        aria-label="vote up"
        onClick={handleUpVote}
      >
        <Icon icon="Plus" />
      </button>
      <output aria-label="Number of votes">{value}</output>
      <button
        className={styles.button}
        aria-label="vote down"
        onClick={handleDownVote}
      >
        <Icon icon="Minus" />
      </button>
    </div>
  )
}
