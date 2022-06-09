import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.head}>
        <Text style={{ color: 'black', fontSize: 40, color: 'white', fontWeight: '500' }}>MyCabToGo</Text>
        <Image source={require('../../Media/drive.png')} style={{ width: 150, height: 150, marginTop: 50 }} />
        <Text style={{ color: 'black', fontSize: 30, color: 'white', fontWeight: '500', marginTop: 50 }}>Move with safety</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.btn
        }>
          <View></View>
          <Text style={{ color: 'white' }}>Get Started</Text>
          <Image style={{ width: 20, height: 20 }} source={require('../../Media/right-arrow.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#276EBE',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: 50
  },
  head: {
    alignItems: 'center',
    top: 80
  },
  btn: {
    backgroundColor: 'black',
    width: 320,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default OnBoardingScreen