import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.cta};
  align-items: center;
  justify-content: center;
  padding: 18px;
`;
