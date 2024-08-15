import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import Home from './components/Home';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Form from './components/Form';
import Main from './components/Main';
import Forgot from './components/Forgot';
import Verification from './components/Verification';
import BookedDetails from './components/Details1';
import Pay from './components/Pay';
import Pay1 from './components/Pay1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen
            name="Carousel"
            component={BoardingScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          /> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Home1"
            component={Home1}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Home2"
            component={Home2}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Form"
            component={Form}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
           <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}/>
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
           <Stack.Screen
            name="Details1"
            component={BookedDetails}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Pay"
            component={Pay}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="Pay1"
            component={Pay1}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
