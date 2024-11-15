import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ onPress, title }) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    padding: 20,
    marginStart: 20,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 90,
    width: '80%',
    height: 67,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    fontFamily: "Gilroy-Regular",
    width: '100%',
    textAlign: 'center',
  },
 
});
