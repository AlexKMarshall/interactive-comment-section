import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

export const colorTokens = createGlobalTheme(':root', {
  lightGray: `hsl(223deg 19% 93%)`,
  veryLightGray: `hsl(228deg 33% 97%)`,
  grayishBlue: `hsl(211deg 10% 45%)`,
  lightGrayishBlue: `hsl(239deg 57% 85%)`,
  moderateBlue: `hsl(238deg 40% 52%)`,
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
  },
})
