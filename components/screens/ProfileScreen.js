import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.Main}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.headerIcon} source={require('../../Media/close.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Ali Raza</Text>
                    <View style={styles.rating}>
                        <Image style={{ width: 13, height: 13, marginRight: 5 }} source={require('../../Media/star.png')} />
                        <Text style={{ color: 'black', fontSize: 12 }}>5.0</Text>
                    </View>
                </View>
                <Image style={styles.loginIcon} source={require('../../Media/login.png')} />
            </View>

            <View style={styles.tags}>
                <TouchableOpacity
                    style={styles.tag}
                    onPress={() => navigation.navigate('Help')}
                >
                    <Image style={styles.tagLogo} source={require('../../Media/question.png')} />
                    <Text style={styles.tagText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tag}
                    onPress={() => navigation.navigate('Wallet')}
                >
                    <Image style={styles.tagLogo} source={require('../../Media/wallet.png')} />
                    <Text style={styles.tagText}>Wallet</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.Cash}>
                <Text style={styles.cashHeading}>Uber Cash</Text>
                <Text style={styles.cashText}>PKR 0.00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Cash}>
                <View>
                    <Text style={styles.cashHeading}>Uber One</Text>
                    <Text style={styles.coinText}>Try free for 1 month</Text>
                </View>
                <Image source={require('../../Media/dollar.png')} style={{ width: 70, height: 70 }} />
            </TouchableOpacity>

            <View>
                <TouchableOpacity
                    style={styles.list}
                    onPress={() => navigation.navigate('Messages')}
                >
                    <Image source={require('../../Media/email.png')} style={{ width: 16, height: 16 }} />
                    <Text style={styles.listText}>Messages</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.list}
                    onPress={() => navigation.navigate('DriverSignup')}
                >
                    <Image source={require('../../Media/wheel.png')} style={{ width: 16, height: 16 }} />
                    <Text style={styles.listText}>Earn By Driving</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.list}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Image source={require('../../Media/gear.png')} style={{ width: 16, height: 16 }} />
                    <Text style={styles.listText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.list}
                    onPress={() => navigation.navigate('Legal')}
                >
                    <Image source={require('../../Media/information-button.png')} style={{ width: 16, height: 16 }} />
                    <Text style={styles.listText}>Legal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIcon: {
        width: 20,
        height: 20,
        marginBottom: 20
    },
    headerText: {
        color: 'black',
        fontSize: 27,
        fontWeight: '500',
        marginBottom: 5
    },
    rating: {
        backgroundColor: '#E5E5E5',
        width: 45,
        height: 25,
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginIcon: {
        width: 50,
        height: 50
    },
    tags: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    tag: {
        backgroundColor: '#E5E5E5',
        padding: 15,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        width: 153
    },
    tagLogo: {
        width: 20,
        height: 20
    },
    tagText: {
        color: 'black',
        fontSize: 18,
        marginTop: 3
    },
    Cash: {
        backgroundColor: '#E5E5E5',
        marginTop: 15,
        borderRadius: 7,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cashHeading: {
        color: 'black',
        fontWeight: '400'
    },
    cashText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    coinText: {
        color: 'black',
        paddingTop: 20,
        fontSize: 12,
        fontWeight: '300'
    },
    list: {
        paddingTop: 30,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 20
    }
})

export default ProfileScreen