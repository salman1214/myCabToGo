import React from 'react'
import {
    ScrollView,
    StyleSheet
} from 'react-native';
import NavBar from '../NavBar';
import HomeHeader from './homeComponents/HomeHeader';
import HomePicknDrop from './homeComponents/HomePicknDrop';
import HomeTags from './homeComponents/HomeTags';
import MapImage from './homeComponents/MapImage';

const Home = (props) => {
    return (
        <ScrollView style={styles.sectionContainer}>

            <NavBar navigation={props.navigation} />

            <HomeHeader />

            <HomeTags navigation={props.navigation} />

            <HomePicknDrop navigation={props.navigation} />

            <MapImage navigation={props.navigation} />
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: '#FFFBF2',
        // paddingBottom: 500
    },
    pickUp: {
        backgroundColor: '#E5E5E5',
        marginTop: 15,
        paddingVertical: 15,
        paddingLeft: 10
    },
    pickUpText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    }
})

export default Home