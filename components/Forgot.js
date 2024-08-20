import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Forgot({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.for}>
        <Image style={styles.img} source={require('../images/forgot.png')} />
      </View>
      <View style={styles.annn}>
        <Text style={styles.an}>Forgot Password</Text>
        <Text style={styles.ann}>
          please enter the email address to continue a verify your account
        </Text>
      </View>
      <View style={styles.anu}>
        <Text style={styles.email}>EMAIL ADDRESS</Text>
      </View>
      <View style={styles.oo}>
        <TextInput
          style={styles.inputt}
          keyboardType="email-address"
          placeholder="Enter your email"
        />
      </View>
      <TouchableOpacity
        style={styles.btnn}
        onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.btn}>SEND</Text>
      </TouchableOpacity>
      <View style={styles.try}>
        <Text style={styles.tr}>Try Another Way</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  for: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 100,
  },
  annn: {
    justifyContent: 'center',
    alignItems: 'center',
    margintop: 200,
    padding: 18,
  },
  an: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  anu: {
    marginTop: 3,
  },
  ann: {
    color: 'gray',
    marginRight: 2,
    fontSize: 16,
  },
  em: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    margin: 9,
    color: 'gray',
  },
  inputt: {
    color: 'black',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    borderWidth: 0,
    borderBottomColor: '#ccc',
    padding: 10,
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
    marginTop: 20,
    borderRadius: 10,
  },
  try: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  tr: {
    color: 'black',
    fontWeight: 'bold',
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: 'black',
  },
  oo: {
    marginTop: 0,
  },
});
export default Forgot;
