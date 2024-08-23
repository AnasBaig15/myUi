import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Pay1({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.fg}>Add Payment Method</Text>
        <Text style={styles.js}>CARD NUMBER</Text>
        <TextInput style={styles.ds} />
      </View>
      <View style={styles.cs}>
        <Text style={styles.acc}>CVC</Text>
        <Text style={styles.ac}>EXPIRY</Text>
      </View>
      <View style={styles.k}>
        <TextInput style={styles.poo} />
        <TextInput style={styles.po} />
      </View>
      <View>
        <Text style={styles.code}>SECURITY CODE</Text>
        <TextInput secureTextEntry style={styles.in} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.card}>ADD CARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Pay1;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: '#FFF',
  },
  backButton: {
    padding: 5,
  },
  backText: {
    fontSize: 40,
    color: 'black',
  },
  card: {
    backgroundColor: 'rgba(60, 143, 124, 1)',
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    margin: 10,
    marginTop: 220,
    borderRadius: 10,
    paddingHorizontal: 130,
    paddingVertical: 20,
  },
  in: {
    color: 'black',
    backgroundColor: '#fff',
    margin: 10,
    borderWidth: 0,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  code: {color: 'gray', marginTop: 30, marginLeft: 10},
  po: {
    color: 'black',
    backgroundColor: '#fff',
    marginRight: 11,
    borderWidth: 0,
    paddingHorizontal: 70,
    borderBottomColor: '#ccc',
  },
  poo: {
    color: 'black',
    backgroundColor: '#fff',
    marginLeft: 11,
    borderWidth: 0,
    paddingHorizontal: 70,
    borderBottomColor: '#ccc',
  },
  k: {flexDirection: 'row', justifyContent: 'space-between'},
  ac: {color: 'gray', marginTop: 5, padding: 7, marginRight: 8},
  acc: {color: 'gray', marginTop: 5, padding: 7, marginLeft: 8},
  cs: {flexDirection: 'row', justifyContent: 'space-between'},
  ds: {
    color: 'black',
    backgroundColor: '#fff',
    margin: 10,
    borderWidth: 0,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  js: {color: 'gray', marginTop: 30, marginLeft: 10},
  fg: {
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 20,
  },
});
