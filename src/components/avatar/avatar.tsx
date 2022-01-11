import 'src/styles/reset.css'
import * as styles from './avatar.css'

import NextImage from 'next/image'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type Props = { username: string; src?: string; size?: 'sm' | 'md' }
export function Avatar({ src, username, size = 'md' }: Props): JSX.Element {
  const initial = username.charAt(0).toUpperCase()
  const backgroundColor = getColor(username)

  return (
    <span
      style={assignInlineVars({ [styles.backgroundColor]: backgroundColor })}
      className={styles.avatar({ size })}
    >
      <span aria-hidden>{initial}</span>
      {src ? <NextImage src={src} alt="" layout="fill" /> : null}
    </span>
  )
}

type GetColorOptions = {
  minLightness?: number
  maxLightness?: number
  minSaturation?: number
  maxSaturation?: number
}
function getColor(
  text: string,
  {
    minLightness = 60,
    maxLightness = 80,
    minSaturation = 30,
    maxSaturation = 60,
  }: GetColorOptions = {}
) {
  const hashedText = hash(text)

  const randomHue = hashedText % 360
  const randomSaturation =
    (hashedText % (maxSaturation - minSaturation)) + minSaturation
  const randomLightness =
    (hashedText % (maxLightness - minLightness)) + minLightness

  return `hsl(${randomHue}deg ${randomSaturation}% ${randomLightness}%)`
}

function hash(str: string): number {
  let hash = 0
  for (let char of str) {
    hash = (hash << 5) + char.charCodeAt(0)
    hash |= 0
  }

  return hash
}
