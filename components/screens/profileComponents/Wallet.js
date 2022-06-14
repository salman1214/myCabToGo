import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'


const Wallet = ({ navigation }) => {
  return (
    <View style={{height: '100%'}}>
        <View style={styles.wallet}>
            
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image style={{width: 20, height: 20, alignSelf: 'baseline', marginBottom: 20}} source={require('../../../Media/arrow.png')}/>
            </TouchableOpacity>
            
            <Text style={{color: 'black', alignSelf: 'baseline', fontSize: 30, fontWeight: '500', marginBottom: 25}}>Wallet</Text>
            <TouchableOpacity style={styles.card}>
                <Text style={{color: 'black', fontWeight: '500'}}>Uber Cash</Text>
                <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: 'black', fontWeight: '500', fontSize: 30}}>PKR 0.00</Text>
                    <Image style={styles.icons} source={require('../../../Media/right-arroww.png')}/>
                </View>
                <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.icons} source={require('../../../Media/information-button.png')}/>
                    <Text style={{marginLeft: 15, color: '#6A6A6A'}}>Auto-refill is off</Text>
                </View>
                <View style={styles.fundBtn}>
                    <Image style={styles.icons} source={require('../../../Media/plus.png')}/>
                    <Text>Add Funds</Text>
                </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth: 1, paddingBottom: 20, borderColor: '#A7A7A7'}}>
                <Text style={{color: 'black', marginTop: 25, color: '#6A6A6A'}}>Payment Methods</Text>
                <View style={{paddingVertical: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 30, height: 30}} source={require('../../../Media/money.png')}/>
                    <Text style={{color: 'black', marginLeft: 15, marginBottom: 7}}>Cash</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color: '#5759FF'}}>Add Payment Method</Text>
                </TouchableOpacity>
            </View>

            <View style={{borderBottomWidth: 1, paddingBottom: 20, borderColor: '#A7A7A7'}}>
                <Text style={{color: 'black', marginVertical: 25, color: '#6A6A6A'}}>Promotions</Text>
                <TouchableOpacity>
                    <Text style={{color: '#5759FF'}}>Add Promo Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wallet: {
        padding: 20
    },
    card: {
        width: 320,
        borderRadius: 20,
        backgroundColor: '#E3E0DD',
        shadowColor: 'black',
        elevation: 3,
        padding: 20,
        alignSelf: 'center'
    },
    icons: {
        width: 15,
        height: 15
    },
    fundBtn:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        width: 120,
        paddingVertical: 10,
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        borderRadius: 25
    }
})

export default Wallet