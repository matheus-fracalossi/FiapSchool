import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaBackground = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
