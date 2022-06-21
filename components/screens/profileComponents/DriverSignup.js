import React, {useContext} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import CabContext from '../../context/cab/CabContext'
import PagesHeader from '../PagesHeader'


const DriverSignup = ({ navigation }) => {

    const cab = useContext(CabContext)

  return (
    <View>
        <PagesHeader navigation={navigation} title='Driver Account' />

        <ScrollView style={styles.body}>
            <Text style={styles.heading}>Sign up to drive</Text>
            <View style={styles.list}>
                <Text style={styles.listItems}>Meet people in your city</Text>
                <Text style={styles.listItems}>Make extra cash, any time</Text>
                <Text style={styles.listItems}>Get paid fast</Text>
            </View>
            <Text style={[styles.listItems, {marginTop: 15}]}>Choose a city</Text>

            <TextInput
                placeholder='Enter City'
                placeholderTextColor='grey'
                style={{backgroundColor: '#E5E5E5', marginTop: 10, paddingLeft: 10, color: 'black'}}
            />

            <Image source={require('../../../Media/drive.jpg')} style={{width: '100%', height: 200, marginTop: 20}} />

            <Text style={{color: 'black', marginTop: 20, fontSize: 15, textAlign:'justify'}}>
                By proceeding, I agree that Uber or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes
            </Text>
            <Text style={{color: 'black', marginTop: 20, fontSize: 15, textAlign:'justify'}}>
                To be eligible for a guarantee, you must see the offer and sign up to drive with Uber on this page by May 1, 2023. The guarantee only applies for your total earnings (not including tips, incentives, or fees paid to Uber) for your first trips with Uber. To qualify for the guarantee, you must sign up in the specified city and complete the minimum trips within 90 days of signing up. If the total earnings of your trips are under the guarantee for your first trips, Uber will pay you the difference of your guarantee and total earnings. Canceled trips do not count as completed trips. Guarantee offers and minimum trip requirements may vary from city to city. We reserve the right to withhold or deduct payments that we determine or believe were in error, fraudulent, illegal, or in violation of driver terms or these terms. Guarantee available for a limited time only. Terms subject to change.
            </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    navigation.navigate('Drawer')
                    cab.setDriverMode(true)
                }}
            >
                <Text style={{fontSize: 16, fontWeight: '500'}}>Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        height: '85%',
        padding: 15,
    },
    heading: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    list: {
        padding: 10
    },
    listItems: {
        color: 'black',
    },
    btn: {
        backgroundColor: 'black',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
})

export default DriverSignup