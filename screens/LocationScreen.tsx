import {Image, StyleSheet, View} from 'react-native';
import CommonBackground from '../components/CommonBackground';

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <CommonBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
