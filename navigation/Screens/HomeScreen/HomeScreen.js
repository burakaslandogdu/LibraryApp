import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FloatingButton from '../components/FloatingButton/FloatingButton';

import styles from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" />
    </SafeAreaView>
  );
};

export default HomeScreen;
