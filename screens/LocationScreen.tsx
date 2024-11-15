import {Alert, Image, Pressable, StyleSheet, View} from 'react-native';
import CommonBackground from '../components/CommonBackground';
import {Text} from 'react-native-paper';

export default function LocationScreen() {
  const backPress = () => {
    Alert.alert('backPrees');
  };

  return (
    <View style={styles.container}>
      <CommonBackground>
        <View style={styles.topBarContainer}>
          <Pressable onPress={backPress}>
            <Image
              source={require('../assets/images/back_ico.png')}
              style={styles.backButton}
            />
          </Pressable>
        </View>

        <View style={styles.mainContainer}>
          <Image source={require('../assets/images/location_img.png')} />
          <Text style={styles.mainSemiBold}>Select Your Location</Text>
          <Text style={styles.mediumText}>
            Switch on your location to stay in tune with{'\n'}what's happening
            in your area
          </Text>

          <View
            style={{
              paddingHorizontal: 25,
              marginTop: 89,
              width: '100%',
            }}>
            <View style={styles.dropDownContainer}>
              <Text style={styles.dropDownmediumText}>Your Zone</Text>
            </View>
          </View>
        </View>
      </CommonBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topBarContainer: {
    marginTop: 40,
    width: '100%',
    height: 25,
    paddingHorizontal: 24,
  },

  backButton: {
    padding: 5,
    height: 20,
    width: 13,
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    // display: 'flex',
    // justifyContent: 'center',
  },

  mainSemiBold: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 26,
    color: 'black',
    textAlign: 'left',
    marginTop: 29,
  },

  mediumText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 15,
  },

  dropDownContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },

  dropDownmediumText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 15,
  },
});
