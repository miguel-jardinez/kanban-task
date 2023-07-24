'use client';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/app/Context/theme-context/ThemeContext';
import { CHANGE_DARK_THEME, CHANGE_LIGHT_THEME } from '@/app/Context/theme-context/store/theme-types';
import { getData } from '@/hooks/useLocalStorage/useLocalStorage';
import { ThemeEnumStorage } from '@/hooks/useLocalStorage/types/themeEnum';
import { ThemeType } from '@/app/Context/theme-context/store/theme-reducer';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { state, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    handleTheme();
  }, []);

  useEffect(() => {
    if (state.theme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [state.theme]);

  const handleTheme = () => {
    const data = getData(ThemeEnumStorage.THEME);

    if (!data || data.theme === 'light') {
      setIsDark(false);
      dispatch({
        type: CHANGE_LIGHT_THEME,
      });
    } else {
      setIsDark(true);
      dispatch({
        type: CHANGE_DARK_THEME,
      });
    }

    setLoading(false);
  };

  const changeTheme = (type: ThemeType) => {
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
    loading,
  };
};
