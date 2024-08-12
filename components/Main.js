import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const slides = [
  {
    id: '1',
    title: 'Bently',
    price: '40$',
    image: require('../images/car2.jpg'),
  },
  {id: '2', title: 'BMW', price: '30$', image: require('../images/car14.png')},
  {
    id: '3',
    title: 'Mercedes',
    price: '35$',
    image: require('../images/car1.jpg'),
  },
];

const Main = () => {
  return (
    <View style={styles.container}>
      {/* Map Component */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.91746918090549,
            longitude: 67.09756900199761,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}></MapView>
      </View>
      <Text style={{color: 'black', fontWeight: 'bold'}}>Choose a Ride</Text>
      {/* FlatList for slides */}
      <View style={styles.flatListContainer}>
        <FlatList
          data={slides}
          renderItem={({item}) => (
            <View style={styles.slideItem}>
              <Image source={item.image} style={styles.slideImage} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  marginVertical: 10,
                }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.con}>
                <TouchableOpacity style={styles.to}>
                  <Text style={styles.btn}>Request A Ride</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 0, // Remove horizontal padding from the container
  },
  mapContainer: {
    flex: 2, // Adjust the ratio as needed
    backgroundColor: '#e9ecef',
    overflow: 'hidden',
    marginBottom: 0, // Remove bottom margin
  },
  map: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  flatListContainer: {
    paddingHorizontal: 0, // Remove horizontal padding
  },
  slideItem: {
    width: wp('100%'), // Full width for each slide item
    padding: 0,
    marginBottom: 0,
  },
  slideImage: {
    width: '100%',
    height: 190, // Adjust height as needed
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 14,
    color: 'black',
  },
  to: {
    width: '100%',
    height: 68.5,
    backgroundColor: 'rgba(60, 143, 124, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Space between the text and button
  },
  btn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Main;
