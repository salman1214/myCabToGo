import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import PagesHeader from './PagesHeader'


const Legal = (props) => {
    return (
        <View>
            <PagesHeader navigation={props.navigation} title='Legal' />

            <View style={styles.body}>
                <Text style={styles.bodyText}>Copyright</Text>
                <Text style={styles.bodyText}>Terms & Conditions</Text>
                <Text style={styles.bodyText}>Privacy Policy</Text>
                <Text style={styles.bodyText}>Data Providers</Text>
                <Text style={styles.bodyText}>Software Licences</Text>
                <Text style={styles.bodyText}>Location Information</Text>
                <Text style={styles.bodyText}>City Regulation</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '80%',
        padding: 20
    },
    bodyText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        marginTop: 15,
        marginBottom: 20
    }
})

export default Legal