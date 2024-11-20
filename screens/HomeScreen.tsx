import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppColorIcon from '../assets/icons/color_carrot_ico.svg';
import SearchIcon from '../assets/icons/search_ico.svg';
import LocationPointer from '../assets/icons/location_pointer_ico.svg';
import AddToCart from '../assets/icons/add_cart_green_btn_ico.svg';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = 173.32;
const ITEM_HEIGHT = 248.51;
// const ITEM_WIDTH = 150; // Width of each horizontal item
// const ITEM_HEIGHT = height / 4; // Fixed height for the items

const data = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows([
  {
    type: 'NORMAL',
    item: 'Banana Congo',
    priceAsIn: '1Kg price',
    price: '$4.99',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png',
  },
  {
    type: 'NORMAL',
    item: 'Apple',
    priceAsIn: '1Kg price',
    price: '$4.75',
    imageUrl:
      'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png',
  },
  {
    type: 'NORMAL',
    item: 'Grapes',
    priceAsIn: '2Kg price',
    price: '$5.25',
    imageUrl:
      'https://www.pngplay.com/wp-content/uploads/9/Grape-Transparent-Images.png',
  },
  {
    type: 'NORMAL',
    item: 'Capsicum',
    priceAsIn: '200g price',
    price: '$6.00',
    imageUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/018/743/197/small_2x/bell-pepper-isolated-png.png',
  },
  {
    type: 'NORMAL',
    item: 'Egg red',
    priceAsIn: '1 box (10 egg) price',
    price: '$8.75',
    imageUrl:
      'https://parspng.com/wp-content/uploads/2023/10/eggpng.parspng.com-3.png',
  },
  {
    type: 'NORMAL',
    item: 'Ginger',
    priceAsIn: '100g price',
    price: '$1.25',
    imageUrl: 'https://pngimg.com/d/ginger_PNG16777.png',
  },
]);

const layoutProvider = new LayoutProvider(
  () => 'NORMAL',
  (type, dim) => {
    dim.width = ITEM_WIDTH;
    dim.height = ITEM_HEIGHT;
  },
);

const renderExploreItem = (type, data) => (
  <View style={styles.exploreItem}>
    <Image
      style={styles.productItemImage}
      source={{
        uri: data.imageUrl,
      }}
      resizeMode="contain"
    />

    <View style={styles.productItemNameContainer}>
      <Text style={styles.productItemTitleText}>{data.item}</Text>
      <Text style={styles.productItemPriceAsInText}>{data.priceAsIn}</Text>
    </View>

    <View style={styles.productItemPriceContainer}>
      <Text style={styles.priceText}>{data.price}</Text>
      <AddToCart width={45} height={45} />
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.baseContainer}>
        <View style={styles.topBarContainer}>
          <AppColorIcon width={120} height={40} />

          <View style={styles.locationRow}>
            <LocationPointer width={15} height={18} />
            <Text style={styles.locationText}>Kochi, Kerala</Text>
          </View>
          <View style={styles.searchContainer}>
            <SearchIcon width={18} height={18} />
            <Text style={styles.searchText}>Search Here...</Text>
          </View>
        </View>

        <ScrollView style={styles.homeScrollView}>
          <View style={styles.viewAllContainer}>
            <Text style={styles.exploreText}>Exclusive Offer</Text>
          </View>

          <RecyclerListView
            dataProvider={data}
            layoutProvider={layoutProvider}
            rowRenderer={renderExploreItem}
            isHorizontal={true}
            forceNonDeterministicRendering={true}
            contentContainerStyle={{
              paddingHorizontal: 20,
              // height: 260,
              marginBottom: 10,
            }}
          />

          <View style={styles.viewAllContainer}>
            <Text style={styles.exploreText}>Best Selling</Text>
          </View>

          <RecyclerListView
            dataProvider={data}
            layoutProvider={layoutProvider}
            rowRenderer={renderExploreItem}
            isHorizontal={true}
            forceNonDeterministicRendering={true}
            contentContainerStyle={{
              paddingHorizontal: 20,
              // height: 260,
              marginBottom: 10,
            }}
          />
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  topBarContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: 'white',
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
    color: 'black',
    marginStart: 7.44,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  viewAllContainer: {
    paddingHorizontal: 25,
    marginTop: 30,
  },

  exploreText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 24,
    color: 'black',
  },

  exploreItem: {
    width: ITEM_WIDTH, // Item width
    height: ITEM_HEIGHT, // Item height
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // flex: 1,
    margin: 5,
    borderRadius: 18,
  },

  productItemImage: {
    height: 129.38,
    width: '100%',
  },

  productItemNameContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },

  productItemTitleText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    color: 'black',
  },

  productItemPriceAsInText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 5,
  },
  productItemPriceContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    verticalAlign: 'middle',
  },

  priceText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: '#181725',
    lineHeight: 18,
    letterSpacing: 0.1,
    verticalAlign: 'middle',
  },

  homeScrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
