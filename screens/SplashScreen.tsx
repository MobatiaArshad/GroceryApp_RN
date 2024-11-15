import {
    StackActions,
    useNavigation,
  } from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      
      Animated.delay(1500),
      
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      
      navigation.navigate('Welcome');
      navigation.dispatch(StackActions.pop(1));
    });

    return () => fadeAnim.setValue(0);
  }, []);

  return (
    <View style={styles.body}>
      <Animated.View style={[styles.rowContentBody, {opacity: fadeAnim}]}>
        <Image
          source={require('../assets/images/app_white_carrot.png')}
          style={styles.image}
        />
        <View style={styles.columnContentBody}>
          <Text style={styles.boldText}>nectar</Text>
          <Text style={styles.mediumText}>online groceriet</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#53B175',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowContentBody: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    alignContent: 'center',
    marginEnd: 10,
  },

  columnContentBody: {
    alignSelf: 'center',
    flexDirection: 'column',
  },

  boldText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 62,
    textAlign: 'left',
    color: 'white',
  },

  mediumText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    letterSpacing: 5.5,
  },
});

export default SplashScreen;
