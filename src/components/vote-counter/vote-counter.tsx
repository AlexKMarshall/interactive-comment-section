import * as styles from './vote-counter.css'

import { Icon } from '..'

type Props = {
  value: number
}
export function VoteCounter({ value = 0 }: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} aria-label="vote up">
        <Icon icon="Plus" />
      </button>
      <span>{value}</span>
      <button className={styles.button} aria-label="vote down">
        <Icon icon="Minus" />
      </button>
    </div>
  )
}
