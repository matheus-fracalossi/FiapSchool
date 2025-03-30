import {FlatList, Pressable, TouchableOpacityProps} from 'react-native';
import {ChevronDown, ChevronUp} from '../../../assets/icons';
import {Column, Row, Text} from '../../atoms';
import {DropdownProps} from './types';
import {DropDownItemContainer} from './styles';

export const DropdownItem = ({children, ...rest}: TouchableOpacityProps) => (
  <DropDownItemContainer {...rest}>
    <Text>{children}</Text>
  </DropDownItemContainer>
);

export const Dropdown = <T,>({
  onPress,
  opened,
  placeholder,
  value,
  options,
  renderValue,
  onValueSelect,
}: DropdownProps<T>) => {
  return (
    <Column gap={8}>
      <Pressable onPress={onPress}>
        <Row bg="lighterBackground" p="12px 16px" br={8} align="center">
          <Text flex={1}>{value ? renderValue(value) : placeholder}</Text>
          {!opened ? <ChevronDown /> : <ChevronUp />}
        </Row>
      </Pressable>
      {opened && (
        <Column bg="lighterBackground" p="12px 16px" br={8} zIndex={9999}>
          <FlatList
            data={options}
            renderItem={({item: option}) => (
              <DropdownItem onPress={() => onValueSelect(option)}>
                {renderValue(option)}
              </DropdownItem>
            )}
          />
        </Column>
      )}
    </Column>
  );
};
