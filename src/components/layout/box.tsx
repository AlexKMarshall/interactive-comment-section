import * as styles from './layout.css'

import { ElementType, ReactNode } from 'react'
import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  component?: ElementType
  padding?: Sprinkles['padding']
  borderRadius?: Sprinkles['borderRadius']
  backgroundColor?: Sprinkles['backgroundColor']
}
export function Box({
  component: Component = 'div',
  children,
  padding = 4,
  borderRadius,
  backgroundColor,
}: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({
    padding,
    borderRadius,
    backgroundColor,
  })

  return <Component className={sprinklesClassNames}>{children}</Component>
}
