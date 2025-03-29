import styled from 'styled-components/native';
import {ImageProps} from './types';

export const Image = styled.Image<ImageProps>`
  ${({height, width, als}) => `
    ${
      height
        ? `height: ${typeof height === 'number' ? `${height}px` : height};`
        : ''
    }
    ${
      width ? `width: ${typeof width === 'number' ? `${width}px` : width};` : ''
    }
    ${als ? `align-self: ${als};` : ''}
  `}
`;
