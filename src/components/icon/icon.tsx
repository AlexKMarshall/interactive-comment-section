import * as iconSvgs from './icons'
import * as styles from './icon.css'

export type Icon = keyof typeof iconSvgs
export const iconKeys = Object.keys(iconSvgs) as Icon[]

type Props = {
  icon: Icon
}
export function Icon({ icon }: Props): JSX.Element {
  const IconComponent = iconSvgs[icon]
  return <IconComponent className={styles.icon} />
}
