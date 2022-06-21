import React, { useContext } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import CabContext from '../../context/cab/CabContext';


const CustomDrawer = (props) => {

    const cab = useContext(CabContext)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View style={{ paddingHorizontal: 12, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image source={require('../../../Media/profile-user.png')} style={{ width: 70, height: 70, borderRadius: 50 }} />
                    <View style={{ marginLeft: -55 }}>
                        <Text style={{ color: 'black' }}>Ali Raza</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={require('../../../Media/star-rating.png')} style={{ width: 15, height: 15 }} />
                            <Image source={require('../../../Media/star-rating.png')} style={{ width: 15, height: 15 }} />
                            <Image source={require('../../../Media/star-rating.png')} style={{ width: 15, height: 15 }} />
                            <Image source={require('../../../Media/star-rating.png')} style={{ width: 15, height: 15 }} />
                            <Image source={require('../../../Media/star-rating.png')} style={{ width: 15, height: 15 }} />
                            <Text style={{ color: 'grey', marginLeft: 5 }}>5</Text>
                        </View>
                        <Text style={{ color: 'grey' }}>Suzuki Mehran</Text>
                    </View>
                    <Image source={require('../../../Media/right-arroww.png')} style={{ width: 15, height: 15 }} />
                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center', paddingVertical: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        cab.setDriverMode(false)
                    }}
                    style={{ width: '95%', alignItems: 'center', justifyContent: 'center', height: 60, borderWidth: 2, margin: 10, borderRadius: 50 }}
                >
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 20 }}>Passenger Mode</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../../../Media/facebook.png')} style={{ width: 40, height: 40, marginRight: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../Media/instagram.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer