import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Story from '../screens/Story/Story';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Home'}
      component={BottomTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Story"
      component={Story}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default RootNavigation;
