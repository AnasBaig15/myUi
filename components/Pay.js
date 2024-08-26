import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function Pay({navigation}) {
  const route = useRoute();
  const {price} = route.params;
  return (
    <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 35,
          padding: 10,
          paddingTop: 30,
        }}>
        Pay Now
      </Text>
      <View style={{flexDirection: 'row', padding: 10, marginTop: -10}}>
        <Image source={require('../images/neel.png')} />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Sarah Jones</Text>
          <Text style={styles.tx}>Account ending in 2183</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 30,
            width: wp('90%'),
          }}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            padding: 10,
            paddingTop: 20,
          }}>
          Saved Card
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Pay1')}>
          <Text style={{color: '#3c8f7c', padding: 10, paddingTop: 30}}>
            +Add New Card
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', padding: 20, marginTop: 5}}>
        <Image
          style={{
            resizeMode: 'contain',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            height: 50,
            width: 65,
          }}
          source={require('../images/Visa.png')}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              paddingTop: 6,
              paddingRight: 8,
            }}>
            Visa
          </Text>
          <Text style={{color: 'gray', fontSize: 14}}>....2183</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 10, marginLeft: 10}}>
        <Image
          style={{
            resizeMode: 'contain',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            height: 50,
            width: 65,
          }}
          source={require('../images/MasterCard.png')}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>MasterCard</Text>
          <Text style={styles.tx}>....2183</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 20,
            width: wp('90%'),
          }}
        />
      </View>
      <Text style={{padding: 10, color: 'black', fontWeight: 'bold'}}>
        Amount
      </Text>
      <Text
        style={{color: 'gray', fontSize: 25, padding: 10, fontWeight: 'bold'}}>
        $0.00
      </Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: 'rgba(60, 143, 124, 1)',
              fontSize: 15,
              color: '#fff',
              textAlign: 'center',
              padding: 15,
              margin: 10,
              marginTop: 80,
              borderRadius: 10,
              paddingHorizontal: 130,
              paddingVertical: 20,
            }}>
            Pay {price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Pay;
const styles = StyleSheet.create({
  tx: {
    color: 'gray',
  },
  backButton: {
    padding: 2,
    marginBottom: 1,
  },
  backText: {
    fontSize: 40,
    color: 'black',
  },
});
