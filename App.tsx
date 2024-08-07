import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import Home from './components/Home';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Form from './components/Form';
import Main from './components/Main';
import Slider from './components/Carousel';
// import BookedDetails from './components/Details1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Slider />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Main" component={Main} />
          {/* <Stack.Screen name="" component={BookedDetails}/>/ */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
