import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView from 'react-native-maps';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
function BookedDetails({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            padding: 10,
            marginTop: 30,
          }}>
          Booked Details
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            padding: 10,
            marginTop: 160,
            fontSize: 16,
          }}>
          Track On Map
        </Text>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.91746918090549,
            longitude: 67.09756900199761,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            padding: 10,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Driver Details
        </Text>
        <View style={styles.det}>
          <Image source={require('../images/driver.png')} style={styles.img} />
          <Text style={{color: 'black', fontWeight: 'bold', padding: 10}}>
            Cameron Wiliamson
          </Text>
          <View style={styles.cont}>
            <TouchableOpacity style={styles.tran}>
              <Text style={styles.fo}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.btnn}
            onPress={() => navigation.navigate('Pay')}>
            <Text style={styles.btn}>PAYMENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    // padding: 10,
    overflow: 'hidden',
    borderRadius: 20,
  },
  map: {width: '100%', height: hp('30%')},
  det: {
    padding: 10,
    flexDirection: 'row',
  },
  img: {
    height: hp('7%'),
    width: wp('14%'),
  },
  cont: {
    paddingTop: 10,
    marginLeft: 30,
    // backgroundColor: '#fff',
    alignItems: 'center',
  },
  tran: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  fo: {
    color: 'gray',
    fontSize: 15,
    // fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'rgba(60, 143, 124, 1)',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 130,
    paddingVertical: 20,
  },
});
export default BookedDetails;
