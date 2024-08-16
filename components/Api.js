import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyD3yrpTkx2b3tBRtUPMxpXqrSvDc67Qk2s',
          language: 'en',
        }}
        onFail={error => console.log(error)}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -150}, {translateY: -25}],
    width: 300,
    zIndex: 1,
  },
  textInputContainer: {
    backgroundColor: 'transparent',
  },
  textInput: {
    height: 44,
    color: '#5d5d5d',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default SearchBar;
