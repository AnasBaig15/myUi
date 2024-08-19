import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MapView from 'react-native-maps';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import SearchBar from './Api';
import Geolocation from '@react-native-community/geolocation';

const slides = [
  { id: '1', title: 'Mercedes', price: '30$/hr', image: require('../images/car1.jpg') },
  { id: '2', title: 'Bently', price: '40$/hr', image: require('../images/car2.jpg') },
  { id: '3', title: 'Aston', price: '25$/hr', image: require('../images/car3.jpg') },
];

const Main = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Form');
    }

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [isLoggedIn, navigation]);

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
      {/* Map Component */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation ? currentLocation.latitude : 24.91746918090549,
            longitude: currentLocation ? currentLocation.longitude : 67.09756900199761,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        {currentLocation && (
          <View style={styles.locationContainer}>
            <Image source={require('../images/loo.png')} style={styles.iconImage} />
            <Text style={styles.locationText}>
              Your Location: {currentLocation.latitude}, {currentLocation.longitude}
            </Text>
            <Image source={require('../images/li.png')} style={styles.lineImage} />
            <SearchBar containerStyle={styles.searchBarContainer} />
            <Image source={require('../images/loc.png')} style={styles.iconImage} />
          </View>
        )}
      </View>

      {/* Title and Animated Pagination */}
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
                style={[styles.dot, { width: dotWidth, opacity }]}
              />
            );
          })}
        </View>
      </View>

      {/* FlatList for slides with arrows inline */}
      <View style={styles.flatListWrapper}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={goToPreviousSlide}
        >
          <Text style={styles.arrowText}>‹</Text>
        </TouchableOpacity>

        <Animated.FlatList
          data={slides}
          ref={flatListRef}
          renderItem={({ item }) => (
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
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
        />

        <TouchableOpacity style={styles.arrowButton} onPress={goToNextSlide}>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Request a Ride Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details1', {
            selectedCar: slides[activeIndex],
            currentLocation
          })}
        >
          <Text style={styles.buttonText}>Request A Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  mapContainer: { flex: 2 },
  map: { width: '100%', height: '100%' },
  locationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  locationText: {
    color: 'black',
    marginHorizontal: 10,
    flex: 1,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  lineImage: {
    width: 1,
    height: 40,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleText: { color: 'black', fontWeight: 'bold', fontSize: 18 },
  paginationContainer: { flexDirection: 'row' },
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
  arrowButton: { justifyContent: 'center', alignItems: 'center', width: 40 },
  arrowText: { fontSize: 40, color: 'black' },
  slideItem: { width: wp('80%') },
  slideImage: { width: '100%', height: 190 },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: 'black' },
  price: { fontSize: 14, color: 'black' },
  buttonContainer: { backgroundColor: '#fff' },
  button: {
    width: '100%',
    height: 62.5,
    backgroundColor: '#3c8f7c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
});

export default Main;