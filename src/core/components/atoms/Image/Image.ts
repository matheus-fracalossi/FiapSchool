import styled from 'styled-components/native';
import {ViewProps} from '../Views/types';

export const Image = styled.Image<ViewProps>`
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
