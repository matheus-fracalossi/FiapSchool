import {useState} from 'react';
import {Column, Text} from '../../atoms';
import {TextInput} from './styles';
import {InputProps} from './types';

export const Input = ({title, onBlur, onFocus, ...rest}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur: InputProps['onBlur'] = e => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleFocus: InputProps['onFocus'] = e => {
    setIsFocused(true);
    onFocus?.(e);
  };

  return (
    <Column align="center" gap={25}>
      {title && (
        <Text size="medium" weight="regular">
          {title}
        </Text>
      )}
      <TextInput
        testID="text-input"
        isFocused={isFocused}
        {...rest}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </Column>
  );
};
