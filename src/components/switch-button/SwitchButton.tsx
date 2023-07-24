import {
  Switch,
  SwitchButtonContainer,
  SwitchButtonMark,
  SwitchButtonStyled,
} from '@/components/switch-button/SwitchButton.styled';
import Image from 'next/image';
import { useTheme } from '@/app/Context/theme-context/hooks/useTheme';
import { ImageEnum } from '@/utils/ImageEnum';

export const SwitchButton = () => {
  const { isDark, changeTheme } = useTheme();

  return (
    <SwitchButtonContainer onClick={() => changeTheme(!isDark ? 'dark' : 'light')}>
      <Image height={18} width={18} src={ImageEnum.LIGHT_MODE} alt="light" />
      <SwitchButtonStyled>
        <SwitchButtonMark checked={isDark} />
        <Switch type="checkbox" />
      </SwitchButtonStyled>
      <Image height={18} width={18} src={ImageEnum.NIGHT_MODE} alt="dark" />
    </SwitchButtonContainer>
  );
};
