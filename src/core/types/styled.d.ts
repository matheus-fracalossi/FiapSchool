import 'styled-components/native';
import {defaultTheme} from '../themes';

type Theme = typeof defaultTheme;
declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
