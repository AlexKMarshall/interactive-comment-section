import * as styles from './button.css'

import { Icon } from '..'

type Props = {
  label: string
  onClick: () => void
  icon?: Icon
  color?: 'info' | 'critical'
}
export function Button({
  label,
  onClick,
  icon,
  color = 'info',
}: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.button({ color })}>
      {icon ? <Icon icon={icon} /> : null}
      {label}
    </button>
  )
}
