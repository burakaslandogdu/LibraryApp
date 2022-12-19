import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/modal/ContentInputModal';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';
import styles from './HomeScreen.style';
const HomeScreen = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }
  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentobject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    console.log(contentobject);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FloatingButton icon="md-add" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
