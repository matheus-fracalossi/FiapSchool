import styled from 'styled-components/native';

export const TextInput = styled.TextInput.attrs(({theme}) => {
  const primary = theme.colors.text.primary;
  return {
    cursorColor: primary,
    placeholderTextColor: primary,
    selectionColor: primary,
  };
})<{isFocused: boolean}>`
  font-family: ${({theme}) => theme.typography.weights.regular};
  font-size: ${({theme}) => theme.typography.sizes.xLarge}px;
  color: ${({theme}) => theme.colors.text.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme, isFocused}) =>
    isFocused ? theme.colors.text.primary : theme.colors.blur};
  width: 100%;
  text-align: center;
  padding-bottom: 8px;
`;
