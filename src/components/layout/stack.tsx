import * as styles from './layout.css'

import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'

import clsx from 'clsx'

type Props = {
  children: ReactNode
  component?: ElementType
  space?: Sprinkles['gap']
  align?: Sprinkles['alignItems']
  role?: AllHTMLAttributes<HTMLElement>['role']
}
export function Stack({
  component: Component = 'div',
  children,
  space = 4,
  align = 'center',
  role,
}: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({
    gap: space,
    alignItems: align,
  })

  return (
    <Component className={clsx(sprinklesClassNames, styles.stack)} role={role}>
      {children}
    </Component>
  )
}
