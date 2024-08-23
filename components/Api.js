import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {GOOGLE_MAPS_API_KEY} from '../config/constants';

const SearchBar = ({placeholderText, fetchAddress}) => {
  const onPressAddress = (data, details) => {
    console.log('details ===>>>', details);
    if (details && details.geometry && details.geometry.location) {
      const Lat = details.geometry.location.lat;
      const Lng = details.geometry.location.lng;
      const address = details.formatted_address;
      fetchAddress(Lat, Lng, address);
    } else {
      console.log('Place details not available');
    }
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        fetchDetails={true}
        onPress={onPressAddress}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
          description: styles.description,
          row: styles.row,
        }}
      />
    </View>
  );
};

// export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // padding: 5,
    // borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginRight: 0,
  },
  textInputStyle: {
    height: 40,
    color: '#5d5d5d',
    fontSize: 14, // Smaller font size
    backgroundColor: '#fff', // Background color for input
    borderRadius: 8, // Rounded corners
    paddingLeft: 10,
  },
  // listView: {
  //   backgroundColor: '#fff',
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 8, // Matching border radius
  //   marginTop: 5,
  // },
  description: {
    fontSize: 14, // Smaller font size
    color: 'black',
  },
  row: {
    padding: 10,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
