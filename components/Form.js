import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Logo from './logo';
function Form({navigation}) {
  return (
    <View style={styles.main}>
      <Logo />
      <View style={styles.container}>
        <Text style={styles.data}>Sign in</Text>
        <Text style={styles.dataa}>Access to your account</Text>
        <Text style={styles.input}>EMAIL ADDRESS</Text>
        <TextInput
          style={styles.pad}
          mode="outlined"
          label="Email"
          placeholder="Type something"
        />
        <Text style={styles.input}>PASSWORD</Text>
        <TextInput
          style={styles.pad}
          mode="outlined"
          label="Password"
          secureTextEntry
        />
        <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>

        <View style={styles.orr}>
          {/* <View style={styles.line} /> */}

          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.acc}>Don't have an account?</Text>
              <Text style={styles.sign}>Sign up</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.btn}>
          <TouchableOpacity style={styles.buttton} >
          <Icon name="Google" size={50}/>
            <Text style={styles.buttonText}>Sign in With Google</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f0f0f0',
  },
  container: {
    backgroundColor: '#f0f0f0',
  },
  data: {
    marginTop: 40,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  },
  dataa: {
    padding: 5,
    color: 'gray',
  },
  input: {
    color: 'gray',
    marginTop: 10,
    padding: 5,
  },
  forgot: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 220,
  },
  button: {
    marginTop: 30,
  },
  or: {
    marginTop: 25,
    color: 'black',
  },
  orr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  row: {
    flexDirection: 'row',
  },
  acc: {
    color: 'black',
  },
  sign: {
    color: 'black',
    fontWeight: 'bold',
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
  pad:{
    margin:10
  }
  // btn:{
  //   justifyContent:'center',
  //   alignItems:'center',
  //   backgroundColor:'white'
  // },
  // buttton:{
  //   backgroundColor:'#4CAF50',
  //   padding:10,
  //   borderRadius:5,
  // },
  // buttonText:{
  //  color:'black',
  //  fontSize:16
  // },
  // line:{
  //   position:'absolute',
  //   marginTop:25,
  //   height:1,
  //   width: '80%',
  //   backgroundColor: 'black'
  // }
});
export default Form;
