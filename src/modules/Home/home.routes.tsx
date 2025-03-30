import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './screens';
import {Header} from '../../core/components';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  const screenOptions = {header: Header};

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
