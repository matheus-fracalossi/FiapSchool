import styled from 'styled-components/native';
import {TextProps} from './types';

export const Text = styled.Text<TextProps>`
  ${({
    theme,
    color = 'primary',
    weight = 'regular',
    size = 'base',
    textAlign = 'left',
  }) => `
    color: ${theme.colors.text[color]};
    font-family: ${theme.typography.weights[weight]};
    font-size: ${theme.typography.sizes[size]}px;
    text-align: ${textAlign};
  `}
`;
