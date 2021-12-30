import * as styles from './button.css'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
}
export function Button({ children, onClick }: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
