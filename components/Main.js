import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SearchBar from './Api';
import Geolocation from '@react-native-community/geolocation';
import {GOOGLE_MAPS_API_KEY} from '../store/constant';

const slides = [
  {
    id: '1',
    title: 'Mercedes',
    price: '30$/hr',
    image: require('../images/car1.jpg'),
  },
  {
    id: '2',
    title: 'Bentley',
    price: '40$/hr',
    image: require('../images/car2.jpg'),
  },
  {
    id: '3',
    title: 'Aston',
    price: '25$/hr',
    image: require('../images/car3.jpg'),
  },
];

const Main = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');
  const [pickupLocation, setPickupLocation] = useState(null);
  const [pickupAddress, setPickupAddress] = useState('');
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Home');
      return;
    }

    const getPlaceName = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=50&key=${GOOGLE_MAPS_API_KEY}`,
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setCurrentAddress(data.results[0].name);
        } else {
          setCurrentAddress('No place found');
        }
      } catch (error) {
        console.error('Error fetching place name:', error);
        setCurrentAddress('Error fetching place name');
      }
    };

    const handleLocation = position => {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude, longitude});
      getPlaceName(latitude, longitude);
    };

    const handleLocationError = error => {
      console.error('Geolocation error:', error);
      setCurrentAddress('Unable to get location');
    };

    Geolocation.getCurrentPosition(handleLocation, handleLocationError, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    });
  }, [isLoggedIn, navigation]);

  const fetchAddressCords = (Lat, Lng, address) => {
    setPickupLocation({latitude: Lat, longitude: Lng});
    setPickupAddress(address);
  };

  const goToNextSlide = () => {
    if (flatListRef.current && currentIndex.current < slides.length - 1) {
      currentIndex.current += 1;
      flatListRef.current.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
      setActiveIndex(currentIndex.current);
    }
  };

  const goToPreviousSlide = () => {
    if (flatListRef.current && currentIndex.current > 0) {
      currentIndex.current -= 1;
      flatListRef.current.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
      setActiveIndex(currentIndex.current);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation
              ? currentLocation.latitude
              : 24.91746918090549,
            longitude: currentLocation
              ? currentLocation.longitude
              : 67.09756900199761,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {currentLocation && <Marker coordinate={currentLocation} />}
        </MapView>

        <View style={styles.cont}>
          <View style={styles.locationRow}>
            <Image style={styles.icon} source={require('../images/loo.png')} />
            {currentLocation && (
              <Text style={styles.locationText}>{currentAddress}</Text>
            )}
          </View>

          <View style={styles.locationRow}>
            <Image style={styles.icon} source={require('../images/loc.png')} />
            <SearchBar
              placeholderText="Enter Pickup Location"
              fetchAddress={fetchAddressCords}
              style={styles.searchBar}
            />
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Menu', {selectedCar: slides[activeIndex]})
          }
          style={styles.na}>
          <Image
            style={styles.menuImage}
            source={require('../images/Menu.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.titleText}>Choose a Ride</Text>
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => {
            const inputRange = [
              (index - 1) * wp('100%'),
              index * wp('100%'),
              (index + 1) * wp('100%'),
            ];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={index}
                style={[styles.dot, {width: dotWidth, opacity}]}
              />
            );
          })}
        </View>
      </View>

      <View style={styles.flatListWrapper}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={goToPreviousSlide}>
          <Text style={styles.arrowText}>‹</Text>
        </TouchableOpacity>

        <Animated.FlatList
          data={slides}
          ref={flatListRef}
          renderItem={({item}) => (
            <View style={styles.slideItem}>
              <Image source={item.image} style={styles.slideImage} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
        />

        <TouchableOpacity style={styles.arrowButton} onPress={goToNextSlide}>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('BookedDetails', {
              selectedCar: slides[activeIndex],
              currentLocation,
              pickupLocation,
              pickupAddress,
              currentAddress,
            })
          }>
          <Text style={styles.buttonText}>Request A Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  mapContainer: {flex: 2},
  map: {width: '100%', height: '100%'},
  cont: {
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 70,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  na: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  menuImage: {
    width: 50,
    height: 50,
  },
  horizontalLine: {
    position: 'absolute',
    top: '31%',
    height: 2,
    backgroundColor: '#ccc',
    width: '80%',
    marginVertical: 9,
    marginLeft: 40,
  },
  locationText: {
    flex: 1,
    padding: 8,
    fontSize: 14,
    borderRadius: 8,
    color: 'black',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    borderBottomWidth: 1,
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleText: {color: 'black', fontWeight: 'bold', fontSize: 18},
  paginationContainer: {flexDirection: 'row'},
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: '#3c8f7c',
    marginHorizontal: 2,
  },
  flatListWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowButton: {justifyContent: 'center', alignItems: 'center', width: 40},
  arrowText: {fontSize: 40, color: 'black'},
  slideItem: {width: wp('80%')},
  slideImage: {width: '100%', height: 190},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  price: {fontSize: 14, color: 'black'},
  buttonContainer: {backgroundColor: '#fff'},
  button: {
    width: '100%',
    height: 62.5,
    backgroundColor: '#3c8f7c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
});

export default Main;
