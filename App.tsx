import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import Form from './components/Form';
import Main from './components/Main';
import {login} from './store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Pay from './components/Pay';
import BookedDetails from './components/BookedDetails';
import Forgot from './components/Forgot';
import Verification from './components/Verification';
import Menu from './components/Menu';
import TripHistory from './components/TripHistory';
import Pay1 from './components/Pay1';
import SignUp from './components/SignUp';
import DriverDetails from './components/DriverDetails';

const Stack = createNativeStackNavigator();

const AppInitializer = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      const password = await AsyncStorage.getItem('userPassword');

      if (email && password) {
        dispatch(login({email, password}));
        navigation.navigate('Main');
      } else {
        navigation.navigate('Home');
      }
    };

    checkAuth();
  }, [dispatch, navigation]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppInitializer" component={AppInitializer} />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Form"
            component={Form}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Home1"
            component={Home1}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Home2"
            component={Home2}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Pay"
            component={Pay}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="BookedDetails"
            component={BookedDetails}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Forgot"
            component={Forgot}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Verification"
            component={Verification}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Menu"
            component={Menu}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="TripHistory"
            component={TripHistory}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
            name="Pay1"
            component={Pay1}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
          <Stack.Screen
            name="DriverDetails"
            component={DriverDetails}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
