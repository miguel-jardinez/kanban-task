import { Theme } from '@/theme/theme/types/Theme';
import { colors } from '@/theme/theme/types/Colors';
import { spacing } from '@/theme/theme/types/Spacing';
import { font } from '@/theme/theme/types/Font';

export const lightTheme: Theme = {
  colors: {
    black: colors.black,
    background: colors.lightGrey,
    lightGrey: colors.lightGrey,
    darkGrey: colors.darkGrey,
    backgroundSwitchTheme: colors.lightGrey,
    backgroundSideBar: colors.white,
    veryDarkGrey: colors.veryDarkGrey,
    lines: colors.linesDark,
    mediumGrey: colors.mediumGrey,
    white: colors.white,
    mainPurple: colors.mainPurple,
    mainPurpleHover: colors.mainPurpleHover,
    red: colors.red,
    redHover: colors.redHover,
    checkboxHover: colors.checkboxHover,
    border: colors.border,
    linesLight: colors.linesLight,
  },
  spacing: {
    ...spacing,
  },
  fonts: {
    ...font,
  },
  type: 'light',
};

export const darkTheme: Theme = {
  colors: {
    black: colors.black,
    background: colors.veryDarkGrey,
    lightGrey: colors.lightGrey,
    darkGrey: colors.darkGrey,
    backgroundSideBar: colors.darkGrey,
    backgroundSwitchTheme: colors.veryDarkGrey,
    veryDarkGrey: colors.veryDarkGrey,
    lines: colors.linesLight,
    mediumGrey: colors.mediumGrey,
    white: colors.white,
    mainPurple: colors.mainPurple,
    mainPurpleHover: colors.mainPurpleHover,
    red: colors.red,
    redHover: colors.redHover,
    checkboxHover: colors.checkboxHover,
    border: colors.border,
    linesLight: colors.linesDark,
  },
  spacing: {
    ...spacing,
  },
  fonts: {
    ...font,
  },
  type: 'dark',
};
