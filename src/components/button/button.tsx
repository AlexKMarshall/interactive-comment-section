import * as styles from './button.css'

import { Icon } from '..'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: () => void
  icon?: Icon
}
export function Button({ children, onClick, icon }: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </button>
  )
}
