import { AllHTMLAttributes, ElementType, ReactNode } from 'react'
import { Sprinkles, sprinkles } from 'src/styles/sprinkles.css'
import clsx, { ClassValue } from 'clsx'

type Props = {
  children: ReactNode
  component?: ElementType
  padding?: Sprinkles['padding']
  borderRadius?: Sprinkles['borderRadius']
  backgroundColor?: Sprinkles['backgroundColor']
  className?: ClassValue
}
export function Box({
  component: Component = 'div',
  children,
  padding = 4,
  borderRadius,
  backgroundColor,
  className: classNameProp,
}: Props): JSX.Element {
  const sprinklesClassNames = sprinkles({
    padding,
    borderRadius,
    backgroundColor,
  })

  const classNames = clsx(sprinklesClassNames, classNameProp)

  return <Component className={classNames}>{children}</Component>
}
