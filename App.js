import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigation from './components/navigation/StackNavigation';
import CabState from './components/context/cab/CabState';

const App = ({ navigation }) => {

  return (
    <CabState>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </CabState>
  );
};

export default App;
