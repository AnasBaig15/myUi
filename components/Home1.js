import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from './logo';
import {TouchableOpacity} from 'react-native';
function Home1({navigation}) {
  return (
    <View style={styles.main}>
      <Logo />
      <View style={styles.container}>
        <Image style={styles.img} source={require('../images/g8.png')} />
        <Text style={styles.text}>
          Get rides to great ride without the hassle
        </Text>
        <Text style={styles.textt}>
          By compairing all the major ride options in one tree app
        </Text>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => navigation.navigate('Home2')}>
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
    marginTop: 150,
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
export default Home1;
