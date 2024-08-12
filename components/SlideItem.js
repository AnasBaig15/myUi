import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Map from './Map';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function SlideItem({item}) {
  return (
    <>
     
      <View>
      <Map />
      <Text style={{color: 'black', fontWeight: 'bold', padding: 10}}>
        Choose To Ride
      </Text>
        <Image style={styles.img} source={item.img} />
      </View>
      <View style={styles.container}>
        <Text style={styles.itr}>{item.title}</Text>
        <Text style={styles.it}>{item.price}</Text>
      </View>
      <View style={styles.con}>
        <TouchableOpacity style={styles.to}>
          <Text style={styles.btn}>Request A Ride</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: hp('20%'),
    marginTop: 10,
  },
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
  it: {
    color: 'black',
    marginLeft: 275,
    fontWeight: 'bold',
  },
  itr: {
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  to: {
    width: '110%',
    height: 130,
    backgroundColor: 'rgba(60, 143, 124, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default SlideItem;
