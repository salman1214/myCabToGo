import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomeTags = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('BookRide', {focuss: null})}
            style={styles.Tags}
        >
            <Text style={styles.firstText}>Book a Ride</Text>
            <Image style={styles.icon} source={require('../../../Media/sport-car.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerImgText: {
        padding: 20
    },
    first: {
        paddingTop: 15,
        flexDirection: 'row',
    },
    Tags: {
        marginTop: 20,
        paddingHorizontal: 22,
        paddingVertical: 25,
        borderRadius: 15,
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Tags2: {
        paddingHorizontal: 25,
        paddingVertical: 16,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5'
    },
    firstText: {
        color: '#000',
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 20
    },
    icon2: {
        width: 40,
        height: 40,
        marginBottom: 5
    },
})

export default HomeTags