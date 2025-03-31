import {
  FlatList,
  TouchableHighlight,
  TouchableOpacityProps,
} from 'react-native';
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
  renderTitle,
  onValueSelect,
}: DropdownProps<T>) => {
  const [DropdownHeight, setDropdownHeight] = useState(0);

  return (
    <Column onLayout={e => setDropdownHeight(e.nativeEvent.layout.height)}>
      <TouchableHighlight onPress={onPress}>
        <Row bg="lighterBackground" p="12px 16px" br={8} align="center">
          <Text flex={1}>{value ? renderTitle(value) : placeholder}</Text>
          {!opened ? <ChevronDown /> : <ChevronUp />}
        </Row>
      </TouchableHighlight>
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
            scrollEnabled={opened}
            bounces={false}
            data={options}
            renderItem={({item: option}) => (
              <DropdownItem onPress={() => onValueSelect(option)}>
                {renderTitle(option)}
              </DropdownItem>
            )}
          />
        </Column>
      )}
    </Column>
  );
};
