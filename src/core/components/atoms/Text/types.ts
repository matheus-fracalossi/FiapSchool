import {TextStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

type TextColorType = keyof DefaultTheme['colors']['text'];
type TextSizeType = keyof DefaultTheme['typography']['sizes'];

export type TextProps = {
  color?: TextColorType;
  weight?: 'regular' | 'medium' | 'bold';
  size?: TextSizeType;
  textAlign?: TextStyle['textAlign'];
  flex?: TextStyle['flex'];
};
