import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from './logo';
function Home({navigation}) {
  return (
    <View style={styles.main}>
      <Logo />
      <View style={styles.container}>
        <Image source={require('../images/grp.png')} />
        <Text style={styles.text}>
          Welcome to trident taxi ride share service
        </Text>
        <Text style={styles.textt}>
          By comparing all the major ride options in one tree app
        </Text>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f0f0f0',
  },
  container: {
    marginTop: 160,
  },
  text: {
    color: 'black',
    marginTop: 15,
    padding: 11,
    fontWeight: 'bold',
    fontSize: 22,
  },
  textt: {
    color: 'black',
    fontSize: 15,
    padding: 15,
  },
  bttn: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'rgba(60, 143, 124, 1)',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
});
export default Home;
