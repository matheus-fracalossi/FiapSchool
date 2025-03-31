import {TouchableOpacityProps} from 'react-native';
import {TextProps} from '../../atoms/Text';
import {PropsWithChildren} from 'react';

export type LinkProps = TextProps & {
  onPress: TouchableOpacityProps['onPress'];
} & PropsWithChildren;
