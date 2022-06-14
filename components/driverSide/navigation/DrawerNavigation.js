import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DriverHome from '../DriverHome';
import Account from '../Account';
import CustomDrawer from './CustomDrawer';
import City from '../City';
import Settings from '../Settings';
import Faq from '../Faq';
import Support from '../Support';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='DriverHome'
            screenOptions={{
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: 'white'
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                options={{headerShown: false}}
                name='Home'
                component={DriverHome}
            />
            <Drawer.Screen name='My Account' component={Account} />
            <Drawer.Screen name='City' component={City} />
            <Drawer.Screen name='Settings' component={Settings} />
            <Drawer.Screen name='FAQ' component={Faq} />
            <Drawer.Screen name='Support' component={Support} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation