import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../store/authSlice';
import {useRoute} from '@react-navigation/native';

function Menu({navigation}) {
  const dispatch = useDispatch();
  const route = useRoute();
  const selectedCar = route.params?.selectedCar || {};
  const handleLogout = async () => {
    try {
      dispatch(logout());

      navigation.navigate('Home');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };
  return (
    <>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.header}>Menu</Text>
        <View style={styles.itemContainer}>
          <Image source={require('../images/user.png')} style={styles.icon} />
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Account Setting</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.itemContainer}>
          <Image source={require('../images/bell.png')} style={styles.icon} />
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Notification</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.itemContainer}>
          <Image source={require('../images/side.png')} style={styles.icon} />
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() => navigation.navigate('TripHistory')}>
            <Text style={styles.text}>Trip History</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.itemContainer}>
          <Image source={require('../images/post.png')} style={styles.icon} />
          <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.text}>Transaction History</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.itemContainer}>
          <Image source={require('../images/out.png')} style={styles.icon} />
          <TouchableOpacity
            style={styles.textContainer}
            onPress={() =>
              navigation.navigate('Pay', {price: selectedCar.price || '0'})
            }>
            <Text style={styles.text}>Payment Service</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.itemContainer}>
          <Image
            source={require('../images/analytics.png')}
            style={styles.icon}
          />
          <TouchableOpacity style={styles.textContainer} onPress={handleLogout}>
            <Text style={styles.text}>Logout</Text>
            <Text style={styles.text}>></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  closeText: {
    fontSize: 23,
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginRight: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    marginTop: 56,
  },
});

export default Menu;
