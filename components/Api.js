import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const SearchBar = ({onDestinationSelected, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          const destination = details?.formatted_address || data.description;
          onDestinationSelected(destination);
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
          listView: styles.listView,
          description: styles.description,
          row: styles.row,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '25%',
    right: '5%',
    left: '5%',
  },
  textInputContainer: {
    // backgroundColor: 'black',
    borderRadius: 10,
  },
  textInput: {
    height: 44,
    color: 'black',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  listView: {
    backgroundColor: 'black',
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
