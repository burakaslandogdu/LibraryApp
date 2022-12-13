import React from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {showMessage} from 'react-native-flash-message';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
//static şeyler için require tercih edilir.
//urller bir enter point'ten çekiyorsan kullanılır

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
const initialFormValues = {
  usermail: '',
  password: '',
};
const Login = ({navigation}) => {
  function handleSignUp() {
    navigation.navigate('SignPage');
  }
  async function handleFormSubmit(formValues) {
    try {
      //await fonksiyon bekleme yapsın diye kullılır usermail ve password dolana kadar bekler.
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../asstes/login-logo.png')}
        />
      </View>
      <View style={styles.body_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {/* <> </> basit kullanımdır uzun hali Fragment yukarıda import edilmeli ve <Fragment> </Fragment> yazılmalıdır. */}
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                onType={handleChange('usermail')}
                value={values.usermail}
                placeholder="e-postanızı Giriniz."
              />
              <Input
                onType={handleChange('password')}
                value={values.password}
                placeholder="Şifrenizi Giriniz."
                isSecure
              />
              <Button text="Giriş Yap" theme="primary" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />

        {/* <Button text="Sign Up" onPress={signUp} />
          <Button text="Sign In" onPress={signIn} />
          <Button text="Sign Out" onPress={signOut} />
          <Button text="Check User" onPress={checkOut} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
