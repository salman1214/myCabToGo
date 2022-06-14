import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import PagesHeader from '../PagesHeader'


const Messages = (props) => {
    return (
        <View>
            <PagesHeader navigation={props.navigation} title='Messages' />

            <View style={styles.body}>
                    <Image style={{ width: 60, height: 60 }} source={require('../../../Media/check.png')} />
                    <Text style={{color: 'black', fontSize: 15, fontWeight: '500', marginTop: 15}}>You're all up to date.</Text>
                    <Text style={{color: 'black', fontSize: 13, marginTop: 5, textAlign: 'center', lineHeight: 20}}>No new messages available at the moment. Come back soon to discover the offer!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Messages