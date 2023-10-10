import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './navigations';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
