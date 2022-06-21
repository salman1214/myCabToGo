import React, { useContext } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Button
} from 'react-native'
import CabContext from '../../context/cab/CabContext'

const Online = () => {
    const cab = useContext(CabContext)
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <View style={{ padding: 15, alignItems: 'center' }}>
                    <Image source={require('../../../Media/profile-user.png')} style={{ width: 50, height: 50 }} />
                    <Text style={{ color: 'black', marginTop: 5 }}>Ali Raza</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingRight: 15 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Iqbal Town (Islamabad)</Text>
                    <Text style={{ color: 'black', fontSize: 18, width: '50%' }}>Central Hospital Rawalpindi (Inside General Hospital, Chah Sultan, Rawalpindi)</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red' }}>PKR200 </Text><Text style={{ color: 'grey' }}>~3.5 km</Text>
                    </View>
                </View>
            </View>
            <Button
                title='Check'
                // onPress={() => console.log(cab.driverMode)}
            />
        </View>
    )
}

export default Online