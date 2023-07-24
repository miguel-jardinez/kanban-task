import { ActionTypes } from '@/app/Context/theme-context/store/actions';
import { CHANGE_LIGHT_THEME } from '@/app/Context/theme-context/store/theme-types';
import { Theme } from '@/theme/theme/types/Theme';
import { darkTheme, lightTheme } from '@/theme/theme/theme';

export type ThemeType = 'light' | 'dark';

export interface InitialState {
  theme: ThemeType
  value: Theme
}

export const initialState: InitialState = {
  theme: 'light',
  value: lightTheme,
};

export const reducer = (state: InitialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case CHANGE_LIGHT_THEME:
      return { theme: 'light', value: lightTheme };
    default:
      return { theme: 'dark', value: darkTheme };
  }
};
