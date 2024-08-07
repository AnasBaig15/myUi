import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
function Logo() {
  return (
    <View>
      <Image style={styles.logo} source={require('../images/Group.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  logo:{
    backgroundColor:'#f0f0f0',
  }
})
export default Logo;