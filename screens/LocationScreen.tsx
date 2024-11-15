import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import CommonBackground from '../components/CommonBackground';
import {Text} from 'react-native-paper';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function LocationScreen() {
  const navigation = useNavigation();
  const [selectedZone, setSelectedZone] = React.useState('');
  const [selectedArea, setSelectedArea] = React.useState('');

  const data = [
    {key: '1', value: 'Thiruvanantapuram'},
    {key: '2', value: 'Kollam'},
    {key: '3', value: 'Kottayam'},
    {key: '4', value: 'Pathanamthitta'},
    {key: '5', value: 'Alappuzha'},
    {key: '6', value: 'Idukki'},
    {key: '7', value: 'Ernakulam'},
    {key: '8', value: 'Thirssur'},
    {key: '9', value: 'Palakkad'},
    {key: '10', value: 'Malappuram'},
    {key: '11', value: 'Kozhikode'},
    {key: '12', value: 'Wayanad'},
    {key: '13', value: 'Kannur'},
    {key: '14', value: 'Kasargode'},
  ];

  const backPress = () => {
    navigation.goBack();
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

        <ScrollView style={styles.scrollContainer}>
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

                <SelectList
                  setSelected={val => setSelectedZone(val)}
                  data={data}
                  save="value"
                  placeholder="Select your zone"
                  boxStyles={styles.dropDownBox}
                  dropdownTextStyles={styles.dropDownTextStyle}
                  inputStyles={styles.dropDownInputStyle}
                />
              </View>

              <View style={styles.dropDownContainer}>
                <Text style={styles.dropDownmediumText}>Your Area</Text>

                <SelectList
                  setSelected={area => setSelectedArea(area)}
                  data={data}
                  save="value"
                  placeholder="Select your Area"
                  boxStyles={styles.dropDownBox}
                  dropdownTextStyles={styles.dropDownTextStyle}
                  inputStyles={styles.dropDownInputStyle}
                />
              </View>

              <CustomButton
                title={'Submit'}
                onPress={console.log(selectedArea + selectedZone)}
                editStyle={styles.customButtonStyle}
              />
            </View>
          </View>
        </ScrollView>
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

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 90, // Optional padding to avoid cutting off the content
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 44,
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
    flexDirection: 'column',
  },

  dropDownmediumText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginTop: 15,
  },

  dropDownBox: {
    width: '100%',
    marginTop: 10,
    borderTopWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
  },

  dropDownTextStyle: {
    fontFamily: 'Gilroy-Regular',
    color: 'black',
    fontSize: 18,
  },

  dropDownInputStyle: {
    fontFamily: 'Gilroy-Medium',
    color: 'black',
    fontSize: 18,
  },

  customButtonStyle: {
    backgroundColor: '#53B175',
    marginBottom: 140,
    marginTop: 40,
    width: '100%',
    height: 67,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
