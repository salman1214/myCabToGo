import React from 'react'
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

const HomeHeader = () => {
    return (
        <View>
            <Image style={styles.headerImg} source={require('../../../Media/img.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    headerImg: {
        width: '100%',
        height: 150,
        borderRadius: 20
    }
})

export default HomeHeader