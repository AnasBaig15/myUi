import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function TripHistory({navigation}) {
  const [trips, setTrips] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadTrips = async () => {
      try {
        const storedTrips = await AsyncStorage.getItem('trips');
        if (storedTrips) {
          setTrips(JSON.parse(storedTrips));
        }
      } catch (error) {
        console.error('Failed to load trips:', error);
      }
    };

    if (isFocused) {
      loadTrips();
    }
  }, [isFocused]);

  const renderTrip = ({item}) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={require('../images/loo.png')} style={styles.icon} />
        <Text style={styles.locationText}>{item.currentAddress}</Text>
      </View>
      <View style={styles.row}>
        <Image source={require('../images/loc.png')} style={styles.icon} />
        <Text style={styles.locationText}>{item.pickupAddress}</Text>
      </View>
      <View style={styles.carDetailsRow}>
        <Image source={item.selectedCar.image} style={styles.carImage} />
        <Text style={styles.carTitle}>{item.selectedCar.title}</Text>
        <Text style={styles.carPrice}>{item.selectedCar.price}</Text>
      </View>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.headerText}>Trip History</Text>
        <FlatList
          data={trips}
          renderItem={renderTrip}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 40,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: wp('4.1%'),
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333', 
    paddingLeft: 0,
    marginBottom: 11,
    marginTop: 40,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  carDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    color: '#333',
  },
  carImage: {
    width: 100,
    height: 70,
    marginRight: 15,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    color: '#333',
  },
  carPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  locationText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    flexWrap: 'wrap',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default TripHistory;
