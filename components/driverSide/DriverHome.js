import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import Offline from './homeComponents/Offline'
import Online from './homeComponents/Online'
import NavBar from './NavBar'

const DriverHome = ({ navigation }) => {

  const [status, setStatus] = useState('online')

  return (
    <View style={{ height: '100%' }}>
      {/* <NavBar status={status} setStatus={setStatus} /> */}
      <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
            <TouchableOpacity
                onPress={() => navigation.openDrawer()}
            >
                <Image source={require('../../Media/burger-bar.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: status === 'online' ? '#40C308' : '#656565', alignItems: 'center', justifyContent: 'center', width: 150, height: 50, borderRadius: 50 }}
                onPress={() => {
                    status === 'online' ? setStatus('offline') : setStatus('online')
                }}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{status === 'online' ? 'Online' : 'Offline'}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../Media/settings.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
            </TouchableOpacity>
        </View>

      <View>
        {status === 'online' ? <Online /> : <Offline />}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default DriverHome