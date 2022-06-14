import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import Home from '../screens/Home';
import ProfileScreen from '../screens/ProfileScreen';
import OnBoardingScreen from '../functionalComponents/OnBoardingScreen';
import BookRide from '../screens/homeComponents/BookRide';
import Map from '../screens/homeComponents/Map';
import Messages from '../screens/profileComponents/Messages';
import Settings from '../screens/profileComponents/Settings';
import Legal from '../screens/profileComponents/Legal';
import Help from '../screens/profileComponents/Help';
import Wallet from '../screens/profileComponents/Wallet';
import DriverSignup from '../screens/profileComponents/DriverSignup';
import DrawerNavigation from '../driverSide/navigation/DrawerNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="BookRide" component={BookRide} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="DriverSignup" component={DriverSignup} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}

export default StackNavigation