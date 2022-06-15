import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
  } from 'react-native'

const RidePrices = () => {
  return (
    <View style={{ backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%', height: 300, borderRadius: 20, padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.rides}>
            <Image source={require('../../Media/car.png')} style={{ width: 60, height: 60 }} />
            <Text style={{ color: 'black' }}>Cab AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rides}>
            <Image source={require('../../Media/car.png')} style={{ width: 60, height: 60 }} />
            <Text style={{ color: 'black' }}>Cab Go</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rides}>
            <Image source={require('../../Media/car.png')} style={{ width: 60, height: 60 }} />
            <Text style={{ color: 'black' }}>Cab Mini</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 25 }}>
          <TextInput
            placeholder='Pickup Location'
            placeholderTextColor='grey'
            style={{ backgroundColor: '#E5E5E5', paddingHorizontal: 20, marginVertical: 5 }}
          />
          <TextInput
            placeholder='Destination'
            placeholderTextColor='grey'
            style={{ backgroundColor: '#E5E5E5', paddingHorizontal: 20, marginVertical: 5 }}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    rides: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 100,
      borderWidth: 2,
      borderRadius: 20
    }
  })

export default RidePrices