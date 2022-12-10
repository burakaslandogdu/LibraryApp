import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//Screens

import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';

//Screen Names

const homeName = 'Home';
const mapName = 'Map';
const chatName = 'Chat';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'md-home';
            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'md-map';
            } else if (rn === chatName) {
              iconName = focused ? 'chatbox' : 'md-chatbox';
            } else if (rn === profileName) {
              iconName = focused ? 'settings' : 'md-settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        screensOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70},
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
