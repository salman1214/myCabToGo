import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'
import NavBar from './NavBar'

const Rating = () => {
    return (
        <View>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Text style={{ color: 'black' }}>My Rating</Text>
            </View>
        </View>
    )
}

export default Rating