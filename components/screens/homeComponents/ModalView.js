import React from "react";
import { TouchableOpacity, Alert, Modal, StyleSheet, Text, Pressable, View, Image} from "react-native";

const ModalView = (props) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color: 'black', fontSize: 12}}>Book the ride according to your demand!</Text>
            
            <TouchableOpacity style={styles.offer}>
              <Image source={require('../../../Media/car.png')} style={{width: 70, height: 70}} />
              <View style={{width: 140}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18, alignSelf: 'flex-start'}}>Cab Mini</Text>
              </View>
              <Text style={{color: 'black'}}>PKR 260.00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.offer}>
              <Image source={require('../../../Media/car.png')} style={{width: 70, height: 70}} />
              <View style={{width: 140}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18, alignSelf: 'flex-start'}}>Cab Go</Text>
              </View>
              <Text style={{color: 'black'}}>PKR 200.00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.offer}>
              <Image source={require('../../../Media/motorbike.png')} style={{width: 50, height: 50}} />
              <View style={{width: 118}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18, alignSelf: 'flex-start'}}>Cab Moto</Text>
              </View>
              <Text style={{color: 'black'}}>PKR 150.00</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}
            >
              <Text style={styles.textStyle}>Start Your Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {
        props.modalVisible === false ? <TouchableOpacity
          style={styles.btn}
          onPress={() => props.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Select Ride</Text>
        </TouchableOpacity>
          :
          <></>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 340
  },
  offer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10
  },
  button: {
    padding: 10,
    elevation: 2,
    width: '100%',
    marginTop: 15
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    width: '93%',
    position: 'absolute',
    bottom: 0
  },
});

export default ModalView;