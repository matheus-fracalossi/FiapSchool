import {ThemeProvider} from 'styled-components/native';
import {render} from '@testing-library/react-native';
import {defaultTheme} from '../themes';
import {JSX} from 'react';

export const renderComponent = (component: JSX.Element) =>
  render(component, {
    wrapper: ({children}) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
  }).toJSON() as {
    type: string;
    props: {
      style: {};
    };
    children: null | JSX.Element;
  };
