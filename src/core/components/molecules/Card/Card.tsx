import {TouchableHighlight} from 'react-native';
import {Column, Text} from '../../atoms';
import {CardProps} from './types';

export const Card = ({
  title,
  className,
  selected,
  disabled,
  onPress,
}: CardProps) => (
  <TouchableHighlight onPress={onPress} disabled={disabled}>
    <Column
      bg="lightestBackground"
      br={8}
      p="16px"
      gap={16}
      bw={1}
      bc={selected ? 'cta' : 'lightestBackground'}>
      <Text weight="medium">{title.toUpperCase()}</Text>
      <Text>{className}</Text>
    </Column>
  </TouchableHighlight>
);
