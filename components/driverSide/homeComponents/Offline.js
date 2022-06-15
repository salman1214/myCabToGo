import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native'

const Offline = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', height: '70%', paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 25, lineHeight: 35, textAlign: 'center'}}>All your previous requests will be shown here within 24 hours</Text>
    </View>
  )
}

export default Offline