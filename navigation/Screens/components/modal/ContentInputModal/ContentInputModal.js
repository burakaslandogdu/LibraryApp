import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button/Button';

import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend(params) {
    if (!text) {
      return;
    }

    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Düşüncelerini insanlarla paylaş"
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
