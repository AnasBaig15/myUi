import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';

const {width} = Dimensions.get('window');
const BoardingScreen = ({navigation}) => {
  return (
    <Swiper
      style={styles.wrapper}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
      loop={false}>
      <View style={styles.slide}>
        <Home navigation={navigation} />
      </View>
      <View style={styles.slide}>
        <Home1 navigation={navigation} />
      </View>
      <View style={styles.slide}>
        <Home2 navigation={navigation} />
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 6,
    marginRight: 6,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 6,
    marginRight: 6,
  },
  pagination: {
    bottom: 10,
  },
});

export default BoardingScreen;
