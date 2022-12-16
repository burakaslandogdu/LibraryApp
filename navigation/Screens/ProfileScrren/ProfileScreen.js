import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileScreen.style';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.logoutIcon}>
          <Icon name="md-exit" size={30} onPress={() => auth().signOut()} />
        </Text>
      </View>
      <View style={styles.middle}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Profile Screen
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text>Desing by Burak Aslandoğdu</Text>
      </View>
    </View>
  );
}
