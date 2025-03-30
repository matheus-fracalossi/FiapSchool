import styled from 'styled-components/native';
import {LoaderProps} from './types';

export const Loader = styled.ActivityIndicator.attrs<LoaderProps>(
  ({theme, themeColor = 'cta'}) => ({
    color: theme.colors[themeColor],
  }),
)``;

export const FullScreenLoader = styled(Loader)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
