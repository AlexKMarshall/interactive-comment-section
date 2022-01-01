import * as styles from './layout.css'

import { ElementType, ReactNode } from 'react'
import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  component?: ElementType
  space?: Sprinkles['gap']
  justify?: Sprinkles['justifyContent']
  align?: Sprinkles['alignItems']
}
export function Cluster({
  component: Component = 'div',
  children,
  space = 4,
  justify = 'flex-start',
  align = 'center',
}: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({
    gap: space,
    justifyContent: justify,
    alignItems: align,
  })

  return (
    <Component className={clsx(sprinklesClassNames, styles.cluster)}>
      {children}
    </Component>
  )
}
