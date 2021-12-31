import * as styles from './layout.css'

import { ElementType, ReactNode } from 'react'
import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  component?: ElementType
  space?: Sprinkles['gap']
  align?: Sprinkles['alignItems']
}
export function Stack({
  children,
  component: Component = 'div',
  space = 4,
  align,
}: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({
    gap: space,
    alignItems: align,
  })

  return (
    <Component className={clsx(sprinklesClassNames, styles.stack)}>
      {children}
    </Component>
  )
}
