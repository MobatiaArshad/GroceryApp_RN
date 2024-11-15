import {ReactNode} from 'react';
import {Image, StyleSheet, View} from 'react-native';

type CommonBackgroundProps = {
  children?: ReactNode;
};

export default function CommonBackground({children}: CommonBackgroundProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/top_gradient_bg.png')}
        style={styles.topImage}
      />
      <View style={styles.contentContainer}>{children}</View>
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
    position: 'relative',
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
    position: 'static',
    bottom: 0,
  },
  contentContainer: {
    position: 'relative',
  },
});
