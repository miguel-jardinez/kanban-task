import { Spacing } from '@/theme/theme/types/Spacing';
import { Font } from '@/theme/theme/types/Font';
import {colors} from "@/theme/theme/types/Colors";

export interface ThemeColors {
  black: string;
  background: string;
  backgroundSideBar: string;
  backgroundSwitchTheme: string;
  lightGrey: string;
  darkGrey: string;
  lines: string;
  mediumGrey: string;
  white: string;
  mainPurple: string;
  mainPurpleHover: string;
  checkboxHover: string;
  red: string;
  redHover: string;
  border: string
  veryDarkGrey: string;
  linesLight: string;
}

export interface Theme {
  colors: ThemeColors,
  spacing: Spacing
  fonts: Font
  type: string;
}
