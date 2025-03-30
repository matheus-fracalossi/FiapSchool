import {FlatList, Pressable, TouchableOpacityProps} from 'react-native';
import {ChevronDown, ChevronUp} from '../../../assets/icons';
import {Column, Row, Text} from '../../atoms';
import {DropdownProps} from './types';
import {DropDownItemContainer} from './styles';
import {useState} from 'react';

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
  const [DropdownHeight, setDropdownHeight] = useState(0);

  return (
    <Column onLayout={e => setDropdownHeight(e.nativeEvent.layout.height)}>
      <Pressable onPress={onPress}>
        <Row bg="lighterBackground" p="12px 16px" br={8} align="center">
          <Text flex={1}>{value ? renderValue(value) : placeholder}</Text>
          {!opened ? <ChevronDown /> : <ChevronUp />}
        </Row>
      </Pressable>
      {opened && (
        <Column
          mt={DropdownHeight + 8}
          width={'100%'}
          bg="lighterBackground"
          p="12px 16px"
          br={8}
          zIndex={9999}
          position="absolute"
          maxHeight={300}>
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
