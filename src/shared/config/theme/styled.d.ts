// src/shared/config/theme/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key: string]: string };
    fonts: { main: string };
    fontSizes: { small: string; medium: string; large: string };
  }
}
