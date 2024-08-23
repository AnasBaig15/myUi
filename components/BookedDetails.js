import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {GOOGLE_MAPS_API_KEY} from '../config/constants';

function BookedDetails({route, navigation}) {
  const {
    selectedCar,
    pickupLocation,
    pickupAddress,
    currentLocation,
    currentAddress,
  } = route.params;

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
        <View style={styles.row}>
          <Image source={require('../images/loo.png')} style={styles.icon} />
          <Text style={styles.locationText}>{currentAddress}</Text>
        </View>

        <View style={styles.row}>
          <Image source={require('../images/loc.png')} style={styles.icon} />
          <Text style={styles.locationText}>{pickupAddress}</Text>
        </View>
        <View style={styles.carDetailsRow}>
          <Image source={selectedCar.image} style={styles.carImage} />
          <Text style={styles.cardText}> {selectedCar?.title}</Text>
          <Text style={styles.cardTextt}>{selectedCar?.price}</Text>
        </View>
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
        }}>
        {currentLocation && <Marker coordinate={currentLocation} />}
        {pickupLocation && <Marker coordinate={pickupLocation} />}
        {currentLocation && pickupLocation && (
          <MapViewDirections
            origin={currentLocation}
            destination={pickupLocation}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
      </MapView>

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
    marginBottom: 11,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 11,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8, // Optional: Add some space between the rows
  },
  icon: {
    width: 20, // Adjust the size as needed
    height: 20, // Adjust the size as needed
    marginRight: 8, // Space between the icon and the text
  },
  carDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    color: 'black',
  },
  carImage: {
    width: 90, // Adjust as needed
    height: 60,
    marginRight: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
  carPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },

  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  cardTextt: {
    color: 'black',
    marginLeft: 95,
  },
  mapHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 6,
  },
  map: {
    width: '100%',
    height: hp('30%'),
    borderRadius: 10,
    marginBottom: 13,
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
    marginBottom: 14,
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
  locationText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
});

export default BookedDetails;
