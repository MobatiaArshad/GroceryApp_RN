import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={welcomStyle.mainContainer}>
      <Image
        style={welcomStyle.fullScreenImage}
        source={require('../assets/images/ico_man.png')}
      />

      <View style={welcomStyle.overlayContainer}>
        <Image source={require('../assets/images/app_white_carrot.png')} />
        <Text style={welcomStyle.mainText}>Welcome{'\n'}to our store</Text>
        <Text style={welcomStyle.lightText}>
          Ger your groceries in as fast as one hour
        </Text>
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate('Auth')}
          editStyle={welcomStyle.customButtonStyle}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const welcomStyle = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
  },

  fullScreenImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    position: 'absolute',
  },

  overlayImage: {
    position: 'absolute',
    top: '10%',
    left: '10%',
  },

  overlayContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },

  mainText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    marginTop: 35,
  },

  lightText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 19,
  },

  regularText: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 29,
  },

  buttonStyle: {
    width: 353,
    height: 67,
    borderRadius: 19,
  },

  customButtonStyle: {
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
    justifyContent: 'center',
  },
});
