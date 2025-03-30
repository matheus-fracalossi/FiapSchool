import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Grades, Home} from './screens';
import {Header as BaseHeader} from '../../core/components';
import {useTheme} from 'styled-components/native';
import {Calendar, FileCheck} from '../../core/assets/icons';
import {useAuth} from '../../core/contexts';
import {UserProvider} from './Contexts';

const Tab = createBottomTabNavigator();

const getHeader = (clearUserToken: () => void) => () =>
  <BaseHeader onPress={clearUserToken} />;

export const HomeTabs = () => {
  const {colors, typography} = useTheme();

  const {clearUserToken} = useAuth();

  const Header = getHeader(clearUserToken);

  const screenOptions = {
    header: Header,

    tabBarStyle: {
      backgroundColor: colors.lighterBackground,
    },
    tabBarActiveTintColor: colors.cta,
    tabBarInactiveTintColor: colors.text.primary,
    tabBarLabelStyle: {
      fontFamily: typography.weights.regular,
      fontSize: typography.sizes.small,
    },
  };

  return (
    <UserProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="AGENDA"
          component={Home}
          options={{tabBarIcon: Calendar}}
        />
        <Tab.Screen
          name="BOLETIM"
          component={Grades}
          options={{tabBarIcon: FileCheck}}
        />
      </Tab.Navigator>
    </UserProvider>
  );
};
