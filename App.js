import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashMessage from 'react-native-flash-message';
import Login from './navigation/Screens/Login/Login';
import Sign from './navigation/Screens/Sign/Sign';
import HomeScreen from './navigation/Screens/HomeScreen/HomeScreen';
import ChatScreen from './navigation/Screens/ChatScreen/ChatScreen';
import MapScreen from './navigation/Screens/MapScreen/MapScreen';
import ProfileScreen from './navigation/Screens/ProfileScrren/ProfileScreen';
import auth from '@react-native-firebase/auth';
import MainContainer from './navigation/MainContainer';

const homeName = 'Home';
const mapName = 'Map';
const chatName = 'Chat';
const profileName = 'Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function GoHome() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        style: {padding: 10, height: 70},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'md-home';
          } else if (rn === mapName) {
            iconName = focused ? 'map' : 'md-map';
          } else if (rn === chatName) {
            iconName = focused ? 'chatbox' : 'md-chatbox';
          } else {
            iconName = focused ? 'profile' : 'md-settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70},
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={mapName}
        component={MapScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={chatName}
        component={ChatScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={profileName}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AutoStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AutoStack" component={AutoStack}>
            {/*<Stack.Screen name="SignPage" component={Sign} */}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="GoHome"
            component={GoHome}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
