import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Pay1() {
  return (
    <View>
         <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>‹</Text> 
        </TouchableOpacity>
      <View>
      <Text
        style={{
          color: 'black',
          marginTop: 20,
          fontWeight: 'bold',
          paddingLeft: 10,
          fontSize: 20,
        }}>
        Add Payment Method
      </Text>
        <Text style={{color: 'gray', marginTop: 30, marginLeft: 10}}>
          CARD NUMBER
        </Text>
        <TextInput
          style={{
            color: 'black',
            backgroundColor: '#fff',
            margin: 10,
            // borderRadius: 8,
            borderWidth: 0,
            borderBottomColor: '#ccc',
            padding: 10,
          }}
        />
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{color:'gray',marginTop:5,padding:7,marginLeft:8}}>CVC</Text>
        <Text style={{color:'gray',marginTop:5,padding:7,marginRight:8}}>EXPIRY</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput style={{color:'black', backgroundColor:'#fff',marginLeft:11, borderWidth:0,paddingHorizontal:70,borderBottomColor:'#ccc'}}/>
        <TextInput style={{color:'black', backgroundColor:'#fff',marginRight:11, borderWidth:0,paddingHorizontal:70,borderBottomColor:'#ccc'}}/>
      </View>
      <View>
        <Text style={{color: 'gray', marginTop: 30, marginLeft: 10}}>
          SECURITY CODE
        </Text>
        <TextInput
        secureTextEntry
          style={{
            color: 'black',
            backgroundColor: '#fff',
            margin: 10,
            // borderRadius: 8,
            borderWidth: 0,
            borderBottomColor: '#ccc',
            padding: 10,
          }}
        />
      </View>
      <View>
        <TouchableOpacity>
            <Text style={{backgroundColor:'rgba(60, 143, 124, 1)',
    fontSize:15,
    color:'#fff',
    textAlign:'center',
    padding:15,
    margin:10 ,
    marginTop: 220,
    borderRadius:10,
    paddingHorizontal:130,
    paddingVertical:20}}>
                ADD CARD
            </Text>
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
})