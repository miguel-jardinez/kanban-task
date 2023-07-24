import { ThemeEnumStorage } from '@/hooks/useLocalStorage/types/themeEnum';
import { ThemeType } from '@/app/Context/theme-context/store/theme-reducer';

interface TypeStorage {
  theme: ThemeType;
}
export const getData = (key: ThemeEnumStorage): TypeStorage | undefined => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data) as TypeStorage;
  }
};

export const setData = (key: ThemeEnumStorage, data: TypeStorage) => {
  localStorage.setItem(key, JSON.stringify(data));
};
