import React from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'
import PagesHeader from '../PagesHeader'

const Help = (props) => {
    return (
        <View>
            <PagesHeader navigation={props.navigation} title='Help & Information' />
            <ScrollView>
                <View style={{ padding: 15 }}>
                    <Text style={styles.text}>Our mobile app provides the cab services all over the country if you want to find out cabs near you, know the cab fare and pay for it through your credit/debit card or cash then MyCabToGo is just right for you. The app is easy to download and also easily makes payment as we accept all payment types by default. Our friendly customer care executives are always available 24 x 7 to provide you with superior quality service. So get started now!</Text>
                    <Text style={styles.text}>MyCabToGo offers many different types of ride options. MyCabToGoX is the most popular[6] and the standard service of the company. MyCabToGoXL, MyCabToGo Comfort, and MyCabToGo Black are other options offered by the company. MyCabToGoXL's are usually a SUV sided vehicle and can accommodate up to 6 people.[7] MyCabToGo's premium service is MyCabToGo Black. MyCabToGo Black drivers have to be highly rated[8] and drive more luxurious vehicles then MyCabToGoX and MyCabToGoXL. MyCabToGo Comfort guarantees a newer vehicle with more leg room.[9] The different types of options gives customers more flexibility when choosing a ride.</Text>
                    <Text style={styles.text}>In the fourth quarter of 2021, MyCabToGo had 118 million monthly active users worldwide and generated an average of 19 million trips per day.[10] In the United States, as of January 2022, MyCabToGo had a 71% market share for ride-sharing[11] and a 27% market share for food delivery.[12] MyCabToGo has been so prominent in the sharing economy that commoditization of service industries using computing platforms has been referred to as MyCabToGoisation,[13] and several startups have described their offerings as "MyCabToGo for X".[14] MyCabToGo has posted hundreds of millions or billions of dollars in losses each year since 2014 except for 2018,[15][16] when it exited the markets in Russia, China, and Southeast Asia in exchange for stakes in rival businesses.[17]</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#9B9B9B',
        fontSize: 16,
        lineHeight: 25,
        textAlign: 'justify',
        marginBottom: 10
    },
})

export default Help