import * as React from 'react';
import {View, Text, SafeAreaView, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FloatingButton from '../components/FloatingButton';
import ContentInputModal from '../components/modal/ContentInputModal';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';

import firestore from '@react-native-firebase/firestore';
import styles from './HomeScreen.style';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../components/card/MessageCard/MessageCard';
const HomeScreen = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(
          contentData || {},
        ); /* eğer contentData boş işe süslü parantez ile hata alımı engellenerek boş veri döndürülmesi sağlanacak */
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      like: 0,
    };
    database().ref('messages/').push(contentObject);
    // console.log();
    // const index = auth().currentUser.email.indexOf('@');
    // const contentobject = {
    //   mail: auth().currentUser.email,
    //   user_id: auth().currentUser.uid,
    //   username: auth().currentUser.email.substring(0, index),
    //   text: content,
    //   date: new Date().toISOString(),
    // };
    // firestore()
    //   .collection('Posts')
    //   .add(contentobject)
    //   .then(() => {
    //     console.log('User added!');
    //   });
    // database().ref('homescreen/').push(contentobject);
  }

  function handleLike(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({like: item.like + 1});
  }

  const rendetContent = ({item}) => (
    <MessageCard message={item} onLike={() => handleLike(item)} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={contentList} renderItem={rendetContent} />
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
