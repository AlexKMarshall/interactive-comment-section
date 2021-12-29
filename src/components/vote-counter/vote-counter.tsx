import * as styles from './vote-counter.css'

import { Icon } from '..'

type Props = {
  value?: number
  onUpVote?: (val: number) => void
  onDownVote?: (val: number) => void
}
export function VoteCounter({
  value = 0,
  onUpVote,
  onDownVote,
}: Props): JSX.Element {
  const handleUpVote = () => onUpVote?.(value + 1)
  const handleDownVote = () => onDownVote?.(value - 1)
  return (
    <div className={styles.wrapper}>
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
