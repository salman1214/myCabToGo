import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const Map = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <View style={{padding: 20}}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.goBack()}
                    style={styles.back}
                >
                    <Image style={styles.img} source={require('../../../Media/arrow.png')} />
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.footer}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('BookRide', { focuss: 0 })}
                    style={{backgroundColor: '#DEDEDE', padding: 15}}
                >
                    <Text style={{color: '#505050', fontSize: 15, fontWeight: '500'}}>Search destination</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ECECEC',
        height: '100%',
    },
    back: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 5,
    },
    img: {
        width: 20,
        height: 20
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        padding: 15
    },
})

export default Map