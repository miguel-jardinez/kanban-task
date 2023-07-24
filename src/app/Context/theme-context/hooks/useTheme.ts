'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/app/Context/theme-context/ThemeContext';
import { CHANGE_DARK_THEME, CHANGE_LIGHT_THEME } from '@/app/Context/theme-context/store/theme-types';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const { state, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    if (state.theme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [state.theme]);

  const changeTheme = (type: 'dark' | 'light') => {
    switch (type) {
      case 'dark':
        dispatch({
          type: CHANGE_DARK_THEME,
        });
        break;

      default:
        dispatch({
          type: CHANGE_LIGHT_THEME,
        });
        break;
    }
  };

  return {
    isDark,
    changeTheme,
  };
};
