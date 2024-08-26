import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

function DriverDetails({navigation}) {
  return (
    <>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Driver Details</Text>

        <View style={styles.profileContainer}>
          <Image
            source={require('../images/driver.png')}
            style={styles.driverImage}
          />
          <Text style={styles.driverName}>Cameron Williamson</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Image
              source={require('../images/arr.png')}
              style={styles.statImage}
            />
            <Text style={styles.statValue}>2,674KM</Text>
            <Text style={styles.statLabel}>Distance Shared</Text>
          </View>
          <View style={styles.statItem}>
            <Image
              source={require('../images/aro.png')}
              style={styles.statImage}
            />
            <Text style={styles.statValue}>410</Text>
            <Text style={styles.statLabel}>Rides Shared</Text>
          </View>
        </View>

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsText}>Reviews (0)</Text>
        </View>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>CONTACT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    marginTop: 15,
    right: 90,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  driverImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  reviewsContainer: {
    marginBottom: 20,
    marginTop: 30,
    right: 100,
  },
  reviewsText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#3c8f7c',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 200,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: -20,
    padding: 2,
    marginBottom: 1,
  },
  backText: {
    fontSize: 40,
    color: 'black',
    backgroundColor: '#f8f8f8',
  },
});

export default DriverDetails;
