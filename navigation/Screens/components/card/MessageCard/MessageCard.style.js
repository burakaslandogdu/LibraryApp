import {buildExternalHelpers} from '@babel/core';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'bdbdbd',
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 5,
  },
  inner_container: {
    padding: 5,
    flex: 1,
  },
  date: {
    fontSize: 13,
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'right',
  },
  user: {
    color: 'white',
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  like_count_container: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  like_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  like_text: {
    color: 'green',
    fontWeight: 'bold',
  },
  like_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
  },
});
