/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/icons/home_ico.svg';
import ExploreIcon from './assets/icons/explore_ico.svg';
import CartIcon from './assets/icons/cart_ico.svg';
import FavoritesIcon from './assets/icons/fav_ico.svg';
import AccountIcon from './assets/icons/acc_ico.svg';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomScreen';
import AuthScreen from './screens/AuthScreen';
import LocationScreen from './screens/LocationScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false, // Hide header in tabs
        tabBarIcon: ({color, size}) => {
          let icon;

          switch (route.name) {
            case 'Home':
              icon = <HomeIcon width={24} height={24} color="#53B175" />;
              break;
            case 'Explore':
              icon = <ExploreIcon width={24} height={24} />;
              break;
            case 'Cart':
              icon = <CartIcon width={24} height={24} />;
              break;
            case 'Favorites':
              icon = <FavoritesIcon width={24} height={24} />;
              break;
            case 'Account':
              icon = <AccountIcon width={24} height={24} />;
              break;
          }

          // return <SvgXml xml={HomeIcon} />;
          return icon;
        },
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="LocationScreen" component={LocationScreen} />

          {/* Bottom Navigation */}
          <Stack.Screen name="MainTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
