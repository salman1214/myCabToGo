import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PagesHeader = ({ navigation, title }) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image style={{ width: 15, height: 15 }} source={require('../../../Media/close-white.png')} />
            </TouchableOpacity>
            <Text style={styles.mainText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',
        height: 100,
        padding: 20
    },
    mainText: {
        color: 'white',
        marginTop: 20,
        fontSize: 30,
        fontWeight: '500'
    }
})

export default PagesHeader