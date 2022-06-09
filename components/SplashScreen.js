import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const SplashScreen = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('OnBoardingScreen')
    }, 700)

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.logo}>MyCabToGO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%'
    },
    logo: {
        fontSize: 35,
        fontWeight: '500',
        color: 'white'
    }
})

export default SplashScreen