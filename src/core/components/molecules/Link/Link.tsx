import {TouchableOpacity} from 'react-native';
import {LinkProps} from './types';
import {Text} from '../../atoms';

export const Link = ({onPress, ...rest}: LinkProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text {...rest} />
  </TouchableOpacity>
);
