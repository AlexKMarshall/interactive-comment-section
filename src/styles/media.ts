export const breakpoints = {
  md: 768,
}

export const media = {
  'md-n-above': `min-width: ${breakpoints.md}px`,
}

type ResolveMQ = Record<keyof typeof media, { '@media': string }>
export const resolveMQ = Object.fromEntries(
  Object.entries(media).map(([key, value]) => [
    key,
    {
      '@media': `screen and (${value})`,
    },
  ])
) as ResolveMQ
