import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

export const colorTokens = createGlobalTheme(':root', {
  lightGray: `hsl(223deg 19% 93%)`,
  veryLightGray: `hsl(228deg 33% 97%)`,
  darkBlue: `hsl(212deg 24% 26%)`,
  grayishBlue: `hsl(211deg 10% 45%)`,
  lightGrayishBlue: `hsl(239deg 57% 85%)`,
  moderateBlue: `hsl(238deg 40% 52%)`,
  softRed: `hsl(358deg 79% 66%)`,
  paleRed: `hsl(357deg 100% 86%)`,
  white: `hsl(0deg 0% 100% / 95%)`,
})

export const colorThemeTokens = createGlobalThemeContract({
  body: 'body',
  voteButtonBg: 'buttonBg',
  button: {
    primary: 'buttonPrimary',
  },
  text: {
    accentLowContrast: 'textAccentLowContrast',
    accent: 'textAccent',
    body: 'textBody',
    strong: 'textStrong',
  },
  tone: {
    info: {
      base: 'toneInfoBase',
      variant: 'toneInfoVariant',
    },
    critical: {
      base: 'toneCriticalBase',
      variant: 'toneCriticalVariant',
    },
  },
  surface: {
    1: 'surface1',
    2: 'surface2',
  },
})

createGlobalTheme(':root', colorThemeTokens, {
  body: colorTokens.veryLightGray,
  voteButtonBg: colorTokens.veryLightGray,
  button: {
    primary: colorTokens.moderateBlue,
  },
  text: {
    accentLowContrast: colorTokens.lightGrayishBlue,
    accent: colorTokens.moderateBlue,
    body: colorTokens.grayishBlue,
    strong: colorTokens.darkBlue,
  },
  tone: {
    info: {
      base: colorTokens.moderateBlue,
      variant: colorTokens.lightGrayishBlue,
    },
    critical: {
      base: colorTokens.softRed,
      variant: colorTokens.paleRed,
    },
  },
  surface: {
    1: colorTokens.veryLightGray,
    2: colorTokens.white,
  },
})
