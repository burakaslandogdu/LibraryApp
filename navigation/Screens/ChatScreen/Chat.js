import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import {GiftedChat} from 'react-native-gifted-chat';

const Chat = () => {
  const route = useRoute();

  const [messages, setmessages] = useState([]);

  const [uid, setUID] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      setUID(user?.uid);
      setName(user?.displayName);
    });
  }, []);

  useEffect(() => {
    return firebase
      .firestore()
      .doc('chats/' + route.params.chatId)
      .onSnapshot(snapshot => {
        setmessages(snapshot.data()?.messages ?? []);
      });
  }, [route.params.chatId]);

  const onSend = (m = []) => {
    firebase
      .firestore()
      .doc('chats/' + route.params.chatId)
      .set(
        {
          messages: GiftedChat.append(messages, m),
        },
        {merge: true},
      );
  };

  return (
    <GiftedChat
      messages={messages.map(x => ({...x, createdAt: x?.createdAt?.toDate()}))}
      onSend={messages => onSend(messages)}
      user={{
        _id: uid,
        name: name,
      }}
    />
  );
};

export default Chat;
