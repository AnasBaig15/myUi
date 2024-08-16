import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Logo from './logo';
import {useDispatch} from 'react-redux';
import {login} from '../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Form({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const storedEmail = await AsyncStorage.getItem('userEmail');
    const storedPassword = await AsyncStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      const userData = {email, password};
      dispatch(login(userData));
      navigation.navigate('Main');
    } else {
      alert('Invalid email or password');
    }
  };

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
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inpuut}>PASSWORD</Text>
        <TextInput
          style={styles.inputt}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
        <TouchableOpacity style={styles.btnn} onPress={handleLogin}>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
        <View style={styles.orr}>
          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.acc}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.sign}>Sign up</Text>
              </TouchableOpacity>
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
    marginLeft: 5,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
  },
  dataa: {
    marginLeft: 5,
    padding: 5,
    color: 'gray',
    marginTop: 4,
  },
  input: {
    fontSize: 12,
    color: 'gray',
    marginTop: 20,
    padding: 5,
    marginLeft: 5,
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
    marginTop: 70,
    color: 'gray',
  },
  sign: {
    marginTop: 70,
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
    marginTop: 20,
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
  inpuut: {
    color: 'gray',
    fontSize: 12,
    marginLeft: 9,
  },
});

export default Form;
