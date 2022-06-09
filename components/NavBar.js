import React from 'react'
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NavBar = ({ navigation }) => {
    return (
        <View style={styles.navBar}>
            {/* <View></View> */}
            <Text style={styles.logo}>MyCabToGo</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <Image style={styles.loginIcon} source={require('../Media/login.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        alignItems: 'flex-end',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo:{
        color: 'black',
        fontSize: 22,
        fontWeight: '700'
    },
    loginIcon: {
        width: 30,
        height: 30,
    }
})

export default NavBar