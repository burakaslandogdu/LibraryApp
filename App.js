import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import Login from './navigation/Screens/Login/Login';
import Sign from './navigation/Screens/Sign/Sign';
import MainContainer from './navigation/MainContainer';

const Stack = createNativeStackNavigator();
export default () => {
  const AutoStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AutoStack" component={AutoStack}>
          {/*<Stack.Screen name="SignPage" component={Sign} */}
        </Stack.Screen>
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
