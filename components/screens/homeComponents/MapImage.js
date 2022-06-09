import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const MapImage = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.Text}>Around you</Text>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Map')}
            >
                <Image style={styles.mapImage} source={require('../../../Media/map.jpg')} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 25
    },
    mapImage: {
        width: '100%',
        height: 200,
        borderRadius: 15
    }
})

export default MapImage