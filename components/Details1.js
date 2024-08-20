import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView from 'react-native-maps';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function BookedDetails({route, navigation}) {
  const {selectedCar, destination, currentLocation} = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Booked Details</Text>

      {/* Card Design for Car Details */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Car: {selectedCar?.title}</Text>
        <Text style={styles.cardText}>Price: {selectedCar?.price}</Text>
        <Text style={styles.cardText}>Destination: {destination}</Text>
        <Text style={styles.cardText}>
          Current Location: {currentLocation?.latitude},{' '}
          {currentLocation?.longitude}
        </Text>
      </View>

      {/* Map Section */}
      <Text style={styles.mapHeader}>Track On Map</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation?.latitude || 24.91746918090549,
          longitude: currentLocation?.longitude || 67.09756900199761,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Driver Details */}
      <Text style={styles.driverHeader}>Driver Details</Text>
      <View style={styles.driverContainer}>
        <Image
          source={require('../images/driver.png')}
          style={styles.driverImage}
        />
        <Text style={styles.driverName}>Cameron Williamson</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Button */}
      <View style={styles.paymentButtonContainer}>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('Pay')}>
          <Text style={styles.paymentButtonText}>PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: -20,
    padding: 2,
    marginBottom: 1,
  },
  backText: {
    fontSize: 40,
    color: 'black',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 0,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  mapHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  map: {
    width: '100%',
    height: hp('30%'),
    borderRadius: 10,
    marginBottom: 16,
  },
  driverHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  driverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  driverImage: {
    width: wp('14%'),
    height: hp('7%'),
    borderRadius: 35,
    marginRight: 16,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  contactButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
  },
  contactText: {
    fontSize: 15,
    color: 'gray',
  },
  paymentButtonContainer: {
    alignItems: 'center',
  },
  paymentButton: {
    backgroundColor: 'rgba(60, 143, 124, 1)',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 130,
  },
  paymentButtonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export default BookedDetails;
