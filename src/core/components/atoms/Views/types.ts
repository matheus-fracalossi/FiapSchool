import {FlexStyle, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

type ViewColorType = keyof Omit<DefaultTheme['colors'], 'text'>;

type Padding =
  | `${number}px ${number}px ${number}px ${number}px` // Four values
  | `${number}px ${number}px ${number}px` // Three values
  | `${number}px ${number}px`
  | `${number}px`;

export type ViewProps = {
  align?: FlexStyle['alignItems'];
  justify?: FlexStyle['justifyContent'];

  flex?: FlexStyle['flex'];
  bg?: ViewColorType;
  gap?: FlexStyle['gap'];

  br?: ViewStyle['borderRadius'];
  bw?: FlexStyle['borderWidth'];
  btw?: FlexStyle['borderTopWidth'];
  bbw?: FlexStyle['borderBottomWidth'];
  blw?: FlexStyle['borderLeftWidth'];
  brw?: FlexStyle['borderRightWidth'];

  p?: Padding;
  pt?: FlexStyle['paddingTop'];
  pb?: FlexStyle['paddingBottom'];
  pl?: FlexStyle['paddingLeft'];
  pr?: FlexStyle['paddingRight'];
  pv?: FlexStyle['paddingVertical'];
  ph?: FlexStyle['paddingHorizontal'];

  m?: FlexStyle['margin'];
  mt?: FlexStyle['marginTop'];
  mb?: FlexStyle['marginBottom'];
  ml?: FlexStyle['marginLeft'];
  mr?: FlexStyle['marginRight'];
};
