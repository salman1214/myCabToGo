import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomePicknDrop = ({ navigation }) => {
    return (
        <View>
            <TouchableWithoutFeedback
                style={styles.pickUp}
                onPress={() => navigation.navigate('BookRide', { focuss: 1 })}
            >
                <Text style={styles.pickUpText}>Enter pick-up point</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={styles.mapInput}
                onPress={() => navigation.navigate('BookRide',{ focuss: 0 })}
            >
                <View style={styles.Destination}>
                    <Image style={styles.icon} source={require('../../../Media/pin.png')} />
                    <Text style={styles.pickUpText}>Set Destination on map</Text>
                </View>
                <Image style={styles.icon2} source={require('../../../Media/right-arroww.png')} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    pickUp: {
        backgroundColor: '#E5E5E5',
        marginTop: 15,
        paddingVertical: 15,
        paddingLeft: 10
    },
    pickUpText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    mapInput: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Destination: {
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    icon2: {
        width: 10,
        height: 10
    }
})

export default HomePicknDrop