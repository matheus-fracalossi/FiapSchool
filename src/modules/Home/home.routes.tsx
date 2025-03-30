import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './screens';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
