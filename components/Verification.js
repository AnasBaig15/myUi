import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Verification({codeLength = 4}) {
  const [code, setCode] = useState('');

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode.join(''));
  };
  return (
    <>
      <View style={styles.imgg}>
        <Image style={styles.img} source={require('../images/verify.png')} />
      </View>
      <View style={styles.annn}>
        <Text style={styles.an}>Verification</Text>
        <Text style={styles.ann}>
          Please enter the 4 digit code sent to your email address
          *********r@gmail.com
        </Text>
      </View>
      <View style={styles.container}>
        {Array(codeLength)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={code[index] || ''}
              onChangeText={value => handleCodeChange(index, value)}
            />
          ))}
      </View>
      <View>
        <TouchableOpacity style={styles.bt}>
          <Text style={styles.btn}>SEND</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.try}>
        <Text style={styles.tr}>Resend Code</Text>
        <View style={styles.line} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  imgg: {
    justifyContent: 'center',
    alignItems: 'center',
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
  annn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    padding: 18,
  },
  an: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ann: {
    color: 'gray',
    marginRight: 2,
    fontSize: 16,
  },
  img: {
    marginTop: 100,
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    width: 40,
    height: 40,
    textAlign: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderColor: 'gray',
  },
});
export default Verification;
