import {StyleSheet} from 'react-native';

//İstediğim buton için istediğim style kullanabilmek için primary ve secondary diye değişken içine aldım.

const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#2286c3',
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: '#2286c3',
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      color: '#2286c3',
    },
  }),
};
