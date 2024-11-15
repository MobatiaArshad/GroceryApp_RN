import {Image, StyleSheet, View} from 'react-native';

export default function CommonBackground() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/top_gradient_bg.png')}
        style={styles.topImage}
      />
      <Image
        source={require('../assets/images/bottom_gradient_bg.png')}
        style={styles.bottomImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topImage: {
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  bottomImage: {
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
});
