import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomButton({onPress, title, editStyle}) {
  return (
    <TouchableOpacity style={editStyle} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Gilroy-Regular',
    width: '100%',
    textAlign: 'center',
  },
});
