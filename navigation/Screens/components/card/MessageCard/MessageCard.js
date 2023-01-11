import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const MessageCard = ({message, onLike}) => {
  //date fns çağırma ve türkçe yapma
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text /*date fns'in çağrıldığı yer*/ style={styles.date}>
          {formattedDate}
        </Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.like_container} onPress={onLike}>
          {!!message.like && (
            <View style={styles.like_count_container}>
              <Text style={styles.like_count_text}>{message.like}</Text>
            </View>
          )}
          <Text style={styles.like_text}>like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
