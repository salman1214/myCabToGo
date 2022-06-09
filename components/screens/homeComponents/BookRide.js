import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const BookRide = ({ navigation, route }) => {
    const { focuss } = route.params
    const [focus, setFocus] = useState(focuss)

    return (
        <View style={{ height: '100%', justifyContent: 'space-between' }}>
            <View style={{padding: 20}}>
                <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../../Media/arrow.png')}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 15
                    }}>

                        <View style={{
                            width: 5,
                            height: 5,
                            backgroundColor: focus === 1 ? 'black' : 'grey',
                            borderRadius: focus === 1 ? 10 : 0
                        }}></View>

                        <View style={{
                            backgroundColor: 'grey',
                            height: 30,
                            width: 2
                        }}></View>

                        <View style={{
                            width: 5,
                            height: 5,
                            backgroundColor: 'grey',
                            backgroundColor: focus === 0 ? 'black' : 'grey',
                            borderRadius: focus === 0 ? 10 : 0
                        }}></View>

                    </View>


                    <View>


                        <View style={styles.selectLocation}>
                            <TextInput
                                onFocus={() => setFocus(1)}
                                style={{
                                    color: 'black',
                                    backgroundColor: focus === 1 ? '#BEBEBE' : '#E5E5E5',
                                    paddingLeft: 10,
                                    height: 35,
                                    width: '90%',
                                    marginLeft: 20
                                }}
                                placeholder='Enter Your Location'
                                placeholderTextColor='#858585'
                            />
                        </View>

                        <View style={styles.selectLocation}>

                            <TextInput
                                onFocus={() => setFocus(0)}
                                style={{
                                    color: 'black',
                                    backgroundColor: focus === 0 ? '#BEBEBE' : '#E5E5E5',
                                    paddingLeft: 10,
                                    height: 35,
                                    width: '90%',
                                    marginLeft: 20,
                                    marginTop: 10
                                }}
                                placeholder='Enter Your Destination'
                                placeholderTextColor='#858585'
                            />
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.btn}
            
            >
                <Text style={styles.btnText}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    selectLocation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        margin: 20
    },
    btnText: {
        fontSize: 16
    }
})

export default BookRide