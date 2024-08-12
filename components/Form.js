import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
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
          style={styles.inputt}
          keyboardType="email-address"
          placeholder="Enter your email"
        />
        <Text style={styles.inpuut}>PASSWORD</Text>
        <TextInput style={styles.inputt} secureTextEntry />
        <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
        <TouchableOpacity
          style={styles.btnn}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
        {/* <View style={styles.o}>
        <Text style={styles.or}>Or</Text>
        </View> */}
        <View style={styles.orr}>
          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.acc}>Don't have an account?</Text>
              <Text style={styles.sign}>Sign up</Text>
            </View>
          </View>
        </View>
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
    marginTop: 12,
    marginLeft:5,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  },
  dataa: {
    marginLeft:5,
    padding: 5,
    color: 'gray',
    marginTop:4,
  },
  input: {
    fontSize:12,
    color: 'gray',
    marginTop: 20,
    padding: 5,
    marginLeft:5,
  },
  forgot: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 216,
  },
  button: {
    marginTop: 30,
  },
  or: {
    marginTop: 10,
    color: 'black',
  },
  orr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  row: {
    flexDirection: 'row',
  },
  acc: {
    marginTop:70,
    color: 'gray',
  },
  sign: {
    marginTop:70,
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
    marginTop:20,
    borderRadius: 10,
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
  inpuut:{
    color:'gray',
    fontSize:12,
    marginLeft:9,

  },
  email:{
    color:'black',
    backgroundColor:'#fff',
    margin:8,
    borderBottomWidth:0,
    borderRadius:8

  },
  google:{
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#fff',
   margin:10,
   padding:10,
   borderRadius:10
  },
  with:{
 color:'black'
  },
  o:{
    justifyContent:'center',
    alignItems:'center',
  }
});
export default Form;
