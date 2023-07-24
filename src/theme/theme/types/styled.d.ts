import { lightTheme } from "@/theme/theme/theme";


type CustomTheme = typeof lightTheme;


declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}