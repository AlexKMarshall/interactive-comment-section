import * as styles from './avatar.css'

import { useEffect, useState } from 'react'

import NextImage from 'next/image'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type Props = { username: string; src?: string }
export function Avatar({ src, username }: Props): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('hsl(0deg 0% 50%)')

  useEffect(() => {
    getColor(username).then((color) => {
      setBackgroundColor(color)
    })
  }, [username])

  const initial = username.charAt(0).toUpperCase()

  return (
    <>
      <span
        style={assignInlineVars({ [styles.backgroundColor]: backgroundColor })}
        className={styles.avatar}
        aria-hidden
      >
        {initial}
        {src ? (
          <NextImage src={src} alt="" layout="fill" width={48} height={48} />
        ) : null}
      </span>
    </>
  )
}

type GetColorOptions = {
  minLightness?: number
  maxLightness?: number
  minSaturation?: number
  maxSaturation?: number
}
async function getColor(
  text: string,
  {
    minLightness = 60,
    maxLightness = 80,
    minSaturation = 30,
    maxSaturation = 60,
  }: GetColorOptions = {}
) {
  const hash = await crypto.subtle.digest(
    'SHA-1',
    new TextEncoder().encode(text)
  )
  const hashString = new Uint8Array(hash).join('').slice(16)
  const randomNumber = parseInt(hashString)

  const randomHue = randomNumber % 360
  const randomSaturation =
    (randomNumber % (maxSaturation - minSaturation)) + minSaturation
  const randomLightness =
    (randomNumber % (maxLightness - minLightness)) + minLightness

  return `hsl(${randomHue}deg ${randomSaturation}% ${randomLightness}%)`
}
