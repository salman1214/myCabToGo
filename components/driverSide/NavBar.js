// import React from 'react'
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Image,
//     TextInput
// } from 'react-native'

// const NavBar = (props) => {
//     return (
//         <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
//             <TouchableOpacity
//                 onPress={() => navigation.openDrawer()}
//             >
//                 <Image source={require('../../Media/burger-bar.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={{ backgroundColor: props.status === 'online' ? '#40C308' : '#656565', alignItems: 'center', justifyContent: 'center', width: 150, height: 50, borderRadius: 50 }}
//                 onPress={() => {
//                     props.status === 'online' ? props.setStatus('offline') : props.setStatus('online')
//                 }}
//             >
//                 <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{props.status === 'online' ? 'Online' : 'Offline'}</Text>
//             </TouchableOpacity>

//             <TouchableOpacity>
//                 <Image source={require('../../Media/settings.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default NavBar