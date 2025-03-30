import {ThemeProvider} from 'styled-components/native';
import {RootStack} from './routes';
import {defaultTheme} from '../core/themes';
import {AuthProvider} from '../core/contexts';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <AuthProvider>
          <RootStack />
        </AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
