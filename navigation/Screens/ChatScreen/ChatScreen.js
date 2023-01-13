import * as React from 'react';
import {View, Text} from 'react-native';
import {
  List,
  Avatar,
  Divider,
  Portal,
  Dialog,
  Button,
  TextInput,
} from 'react-native-paper';
import FloatingButton from '../components/FloatingButton';
import firebase from '@react-native-firebase/app';
import {useNavigation} from '@react-navigation/core';

const ChatScreen = () => {
  const [isDialogVisible, setIsDialogVisible] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setEmail(user?.email ?? '');
    });
  }, []);

  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation();

  const createChat = async () => {
    if (!email || !userEmail) return;
    setIsLoading(true);
    const response = await firebase
      .firestore()
      .collection('chats')
      .add({
        users: [email, userEmail],
      });
    setIsLoading(false);
    setIsDialogVisible(false);
    navigation.navigate('Chattt', {chatId: response.id});
  };

  const [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    return firebase
      .firestore()
      .collection('chats')
      .where('users', 'array-contains', email)
      .onSnapshot(querySnapshot => {
        setChats(querySnapshot.docs);
      });
  }, [email]);

  return (
    <View style={{flex: 1}}>
      {chats.map(chat => (
        <React.Fragment>
          <List.Item
            title={chat.data().users.find(x => x !== email)}
            description={(chat.data().messages ?? [])[0]?.text ?? undefined}
            left={() => (
              <Avatar.Text
                label={chat
                  .data()
                  .users.find(x => x !== email)
                  .split(' ')
                  .reduce((prev, current) => prev + current[0], '')}
                size={56}
              />
            )}
            onPress={() => navigation.navigate('Chattt', {chatId: chat.id})}
          />
          <Divider inset />
        </React.Fragment>
      ))}

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}>
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Enter user email"
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
            <Button onPress={() => createChat()} loading={isLoading}>
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FloatingButton icon="people" onPress={() => setIsDialogVisible(true)} />
    </View>
  );
};

export default ChatScreen;
