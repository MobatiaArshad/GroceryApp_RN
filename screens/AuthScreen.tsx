import {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  PhoneNumberInput,
  getCountryByCode,
} from 'react-native-paper-phone-number-input';
import SocialButton from '../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';

export default function AuthScreen() {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState<string>('BD'); // Default country code
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const {name, flag, dialCode} = getCountryByCode(countryCode); // Get country details

  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.mainContainer}>
        <Image
          source={require('../assets/images/login_veg_ico.png')}
          style={{position: 'relative', top: 0}}
        />
      </View>

      <View style={loginStyle.secondContainer}>
        <Text style={loginStyle.mainSemiBold}>
          Get your groceries{'\n'}with nector
        </Text>

        <View style={loginStyle.phoneContainer}>
          <PhoneNumberInput
            style={loginStyle.phoneNumberInput}
            code={countryCode}
            setCode={setCountryCode}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            theme={{
              fonts: {
                bodyLarge: {fontFamily: 'Gilroy-Bold'},
                default: {fontFamily: 'Gilroy-Regular'},
                regular: {fontFamily: 'Gilroy-Regular'},
              },
            }}
          />
        </View>

        <Text style={loginStyle.connectSocialText}>
          Or connect with social media
        </Text>

        <View style={loginStyle.socialContainer}>
          <SocialButton
            imageSource={require('../assets/images/google_ico.png')}
            text="Continue with Google"
            color="#5383EC"
            onPress={() => navigation.navigate('LocationScreen')}
          />

          <SocialButton
            imageSource={require('../assets/images/fb_ico.png')}
            text="Continue with Facebook"
            color="#4A66AC"
            onPress={() => navigation.navigate('LocationScreen')}
          />
        </View>
      </View>
    </View>
  );
}
const loginStyle = StyleSheet.create({
  countryPickerContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    position: 'relative',
  },

  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    width: '100%',
    flex: 1,
    position: 'relative',
  },

  secondContainer: {
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },

  mainSemiBold: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 26,
    color: 'black',
    textAlign: 'left',
    marginTop: 19,
  },

  connectSocialText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    color: '#828282',
    textAlign: 'center',
    marginTop: 40,
    width: '100%',
  },

  phoneContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 1,
  },

  phoneNumberInput: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
    fontFamily: 'Gilroy-Regular',
    fontSize: 20,
  },

  socialContainer: {
    marginTop: 37,
    marginBottom: 40,
  },
});
