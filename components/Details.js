import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function DriverDetails() {
  return (
    <View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <Text>Driver Details</Text>
      <View>
        <Image />
        <Text></Text>
      </View>
      <View></View>
    </View>
  );
}
export default DriverDetails;
