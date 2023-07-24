import { CHANGE_DARK_THEME, CHANGE_LIGHT_THEME } from '@/app/Context/theme-context/store/theme-types';

type ChangeDarkTheme = { type: typeof CHANGE_DARK_THEME };
type ChangeLightTheme = { type: typeof CHANGE_LIGHT_THEME };

export type ActionTypes = ChangeDarkTheme | ChangeLightTheme;
