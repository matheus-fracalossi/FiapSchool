import styled, {css} from 'styled-components/native';
import {ViewProps} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';

const sharedViewProps = css<ViewProps>`
  ${({theme, ...props}) => `
    ${props.bg ? `background-color: ${theme.colors[props.bg]};` : ''}
    ${props.align ? `align-items: ${props.align};` : ''}
    ${props.justify ? `justify-content: ${props.justify};` : ''}
    ${props.flex ? `flex: ${props.flex};` : ''}
    ${props.gap ? `gap: ${props.gap}px;` : ''}
    ${props.br ? `border-radius: ${props.br}px;` : ''}
    ${props.bw ? `border-width: ${props.bw}px;` : ''}
    ${props.btw ? `border-top-width: ${props.btw}px;` : ''}
    ${props.bbw ? `border-bottom-width: ${props.bbw}px;` : ''}
    ${props.blw ? `border-left-width: ${props.blw}px;` : ''}
    ${props.brw ? `border-right-width: ${props.brw}px;` : ''}
    ${props.p ? `padding: ${props.p};` : ''}
    ${props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props.pl ? `padding-left: ${props.pl}px;` : ''}
    ${props.pr ? `padding-right: ${props.pr}px;` : ''}

    ${props.m ? `margin: ${props.m}px;` : ''}
    ${props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props.mb ? `margin-bottom: ${props.mb}px;` : ''}
    ${props.ml ? `margin-left: ${props.ml}px;` : ''}
    ${props.mr ? `margin-right: ${props.mr}px;` : ''}
  `}
`;

export const Column = styled.View<ViewProps>`
  ${sharedViewProps}
`;

export const Row = styled(Column)``;

export const SafeAreaBackground = styled(SafeAreaView)<ViewProps>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  ${sharedViewProps}
`;
