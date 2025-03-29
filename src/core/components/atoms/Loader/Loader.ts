import styled from 'styled-components/native';
import {LoaderProps} from './types';

export const Loader = styled.ActivityIndicator<LoaderProps>`
  color: ${({color = 'cta', theme}) => theme.colors[color]};
`;
