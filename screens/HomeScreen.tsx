import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import AppColorIcon from '../assets/icons/color_carrot_ico.svg';
import SearchIcon from '../assets/icons/search_ico.svg';

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.baseContainer}>
        <View style={styles.topBarContainer}>
          <AppColorIcon width={120} height={40} />
          <Text style={styles.locationText}>Kochi, Kerala</Text>
          <View style={styles.searchContainer}>
            <SearchIcon width={18} height={18} />
            <Text style={styles.searchText}>Search Here</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },

  topBarContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30,
    paddingHorizontal: 25,
  },

  searchContainer: {
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#7C7C7C',
    height: 52,
    alignItems: 'center',
    marginTop: 20,
  },
  searchText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    color: '#7c7c7c',
    marginStart: 10,
  },
  locationText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: '#4C4F4D',
  },
});
