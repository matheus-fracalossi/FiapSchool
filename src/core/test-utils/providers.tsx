import {ThemeProvider} from 'styled-components/native';
import {render} from '@testing-library/react-native';
import {defaultTheme} from '../themes';
import {JSX} from 'react';

type ComponentTreeType = {
  type: string;
  props: {
    style: {};
  };
  children: ComponentTreeType[];
};

export const renderComponent = (componentProp: JSX.Element) => {
  const component = render(componentProp, {
    wrapper: ({children}) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
  });

  return {
    component,
    tree: component.toJSON() as ComponentTreeType,
  };
};
