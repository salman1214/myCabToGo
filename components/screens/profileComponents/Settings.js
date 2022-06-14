import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    BackHandler
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PagesHeader from '../PagesHeader'


const Settings = (props) => {
    return (
        <View>
            <PagesHeader navigation={props.navigation} title='Account Settings' />

            <View style={styles.body}>
                <View style={{flexDirection: 'row', borderBottomWidth: 1, padding: 15, borderColor: '#CBCBCB'}}>
                    <Image style={{ width: 70, height: 70 }} source={require('../../../Media/login.png')} />
                    <View style={{marginLeft: 20, justifyContent: 'center'}}>
                        <Text style={styles.profileText}>Salman Naqvi</Text>
                        <Text style={styles.profileText}>+92 3325275579</Text>
                        <Text style={styles.profileText}>salmanaqvi461@gmail.com</Text>
                    </View>
                </View>

                <View style={{padding: 15, borderBottomWidth: 1, borderColor: '#CBCBCB'}}>
                    <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Privacy</Text>
                    <Text style={{color: '#9B9B9B', fontSize: 15}}>Manage the data you share with us</Text>
                </View>

                <View style={{padding: 15, borderBottomWidth: 1, borderColor: '#CBCBCB'}}>
                    <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Security</Text>
                    <Text style={{color: '#9B9B9B', fontSize: 15}}>Control your account security with 2-step verification</Text>
                </View>

                <TouchableOpacity
                    style={{padding: 15, borderBottomWidth: 1, borderColor: '#CBCBCB'}}
                    onPress={() => BackHandler.exitApp()}
                >
                    <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '80%',
    },
    profileText:{
        color: 'black'
    },
})

export default Settings