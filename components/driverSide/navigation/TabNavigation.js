import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DriverHome from '../DriverHome';
import RidePrices from '../../extraComponent/RidePrices';
import { Image, View } from 'react-native';
import Rating from '../Rating';

const Tab = createBottomTabNavigator();

const TabNavigation = () =>  {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                paddingBottom: 10,
                height: 70
            },
            tabBarActiveTintColor: 'black'
        }}
    >
        <Tab.Screen
            name='Rider Request'
            component={DriverHome}
            options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../../../Media/list.png')} style={{width: 20, height: 20}} />
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name='My Rating'
            component={Rating}
            options={{
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../../../Media/star.png')} style={{width: 20, height: 20}} />
                    </View>
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation