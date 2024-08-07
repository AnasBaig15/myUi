import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MapView, {Circle, Marker, Polyline, Polygon} from 'react-native-maps';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_MAPS_API_KEY } from '../config/constants';
const Map = () => {
  const coordinates = [
    {latitude: 24.914822552088353, longitude: 67.09280539893858},
    {latitude: 24.909334508442114, longitude: 67.08525229859272},
    {latitude: 24.930429057876445, longitude: 67.11752463651867},
    {latitude: 24.937511658231088, longitude: 67.14747954646137},
  ];
  const [markerList, setMarkersList] = useState([
    {
      id: 1,
      latitude: 24.919648714935065,
      longitude: 67.09523011545178,
      title: 'Team A',
      description: 'This is A current location',
    },
    {
      id: 2,
      latitude: 24.919648714935065,
      longitude: 67.09523011545178,
      title: 'Team B',
      description: 'This is B current location',
    },
  ]);
  return (
    <View>
      {/* <GooglePlacesAutocomplete
      placeholder = 'Search'
      onPress={{data,details = null} =>{
        console.log(data, details)
      }}
      query={{
        key:GOOGLE_MAPS_API_KEY,
        language:'en'
      }}
      onFail={{error => console.longitude}}
    /> */}
      <MapView
        style={{width: '100%', height: '70%'}}
        initialRegion={{
          latitude: 24.91746918090549,
          longitude: 67.09756900199761,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* {markerList.map(marker => {
          return (
            <Marker
              draggable
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
              onDragEnd={e => this.setState({x: e.nativeEvent.coordinate})}
            />
          );
        })} */}
        {/* <Circle
          center={{
            latitude: 24.769263,
            longitude: 67.066263,
          }}
          radius={200}
          strokeColor="blue"
          fillColor="#EBF5FB"
        /> */}
        {/* <Polyline
            coordinates={coordinates}
            strokeColor='blue'
            strokeWidth={4}
          /> */}
        <Polygon coordinates={coordinates} strokeWidth={4} strokeColor="red" />
      </MapView>
    </View>
  );
};
export default Map;
