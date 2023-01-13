import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileScreen.style';
import auth, {firebase} from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar, Title, Subheading, Button} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ProfileScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setName(user?.displayName ?? '');
      setEmail(user?.email ?? '');
    });
  }, []);
  return (
    <View style={{alignItems: 'center', marginTop: 16}}>
      <Avatar.Text
        label={name.split(' ').reduce((prev, current) => prev + current[0], '')}
      />
      <Title>{name}</Title>
      <Subheading>{email}</Subheading>
      <Button onPress={() => auth().signOut()}>Sign Out</Button>
    </View>
  );
};
export default ProfileScreen;
