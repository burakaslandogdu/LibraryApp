import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';
//theme default olarak primary geliyor.
//başka sayfada çağırdığımızda theme belirlemezsek otomatik bu tema çalışacak

const Button = ({text, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Text style={styles[theme].title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
