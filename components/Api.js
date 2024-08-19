import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const SearchBar = ({onDestinationSelected}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          const destination = details.formatted_address;
          onDestinationSelected(destination); 
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
  textInput: {
    height: 44,
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  listView: {
    backgroundColor: 'white', 
  },
  description: {
    color: 'black',
  },
  row: {
    backgroundColor: 'white', 
    height: 44,
  },
});

export default SearchBar;
