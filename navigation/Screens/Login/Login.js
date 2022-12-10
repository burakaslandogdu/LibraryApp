import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './Login.style';
//static şeyler için require tercih edilir.
//urller bir enter point'ten çekiyorsan kullanılır
const Login = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default Login;
