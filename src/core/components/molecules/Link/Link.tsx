import {TouchableHighlight} from 'react-native';
import {LinkProps} from './types';
import {Text} from '../../atoms';

export const Link = ({onPress, ...rest}: LinkProps) => (
  <TouchableHighlight onPress={onPress}>
    <Text {...rest} />
  </TouchableHighlight>
);
