import React from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
//static şeyler için require tercih edilir.
//urller bir enter point'ten çekiyorsan kullanılır
const Login = () => {
  // const signUp = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(
  //       'jane.doe@example.com',
  //       'SuperSecretPassword!',
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // };

  // const signIn = () => {
  //   auth()
  //     .signInWithEmailAndPassword(
  //       'jane.doe@example.com',
  //       'SuperSecretPassword!',
  //     )
  //     .then(res => console.log('Signed in.'))
  //     .catch(err => console.log(err));
  // };

  // const signOut = () => {
  //   auth()
  //     .signOut()
  //     .then(res => console.log('Signed out.'))
  //     .catch(err => console.log(err));
  // };
  // const checkOut = () => {
  //   const user = auth().currentUser;
  //   console.log(user);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../asstes/login-logo.png')}
        />
      </View>
      <View style={styles.body_container}>
        <Input placeholder="Kullanıcı Adını Giriniz." />
        <Input placeholder="Şifrenizi Giriniz." />
        <Button text="Giriş Yap" />
        <Button text="Kayıt Ol" />
        {/* <Button text="Sign Up" onPress={signUp} />
          <Button text="Sign In" onPress={signIn} />
          <Button text="Sign Out" onPress={signOut} />
          <Button text="Check User" onPress={checkOut} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
