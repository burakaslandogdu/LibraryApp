import React from 'react';
import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './Sign.style';
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
  repassword: '',
};
const Sign = ({navigation}) => {
  function handleLogin() {
    navigation.goBack();
  }
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler Uyuşmuyor',
        type: 'danger',
      });
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
                  placeholder="Şifrenizi giriniz."
                  isSecure
                />
                <Input
                  onType={handleChange('repassword')}
                  value={values.repassword}
                  placeholder="Şifrenizi tekrar giriniz."
                  isSecure
                />
                <Button
                  text="Kayıt ol"
                  theme="primary"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <Button text="Geri" theme="secondary" onPress={handleLogin} />

          {/* <Button text="Sign Up" onPress={signUp} />
          <Button text="Sign In" onPress={signIn} />
          <Button text="Sign Out" onPress={signOut} />
          <Button text="Check User" onPress={checkOut} /> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sign;
