import {ThemeProvider} from 'styled-components/native';
import {RootStack} from './routes';
import {defaultTheme} from '../core/themes';
import {AuthProvider} from '../core/contexts';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </ThemeProvider>
  );
};
