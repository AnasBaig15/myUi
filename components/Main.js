import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import Map from './Map';
function Main({navigation}) {
  return (
    <>
      <Map/>
      <View style={styles.containerr}>
        <Text style={styles.text}>Choose a ride</Text>
        <Image source={require('../images/car.png')} />
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text}>Audi E-tron Sportback</Text>
            <Text style={styles.textt}>25$</Text>
          </View>
        </View>
      </View>
      <View style={styles.view}>
        <View style={styles.buttonWrapper}>
          <Button mode="contained" onPress={() =>navigation.navigate('Details')}>Request a Ride</Button>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  containerr: {
    marginTop:-150,
    backgroundColor: '#fff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginRight: 135,
  },
  textt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    height: 100,
    width: '90%',
    justifyContent: 'center',
  },
});
export default Main;
