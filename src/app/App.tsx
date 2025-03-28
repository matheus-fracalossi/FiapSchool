import {ThemeProvider} from 'styled-components/native';
import {RootStack} from './routes';
import {defaultTheme} from '../core/themes';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootStack />
    </ThemeProvider>
  );
};
