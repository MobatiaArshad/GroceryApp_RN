import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PaperProvider} from 'react-native-paper';

// Import SVG icons
import HomeIcon from './assets/icons/home_ico.svg';
import ExploreIcon from './assets/icons/explore_ico.svg';
import CartIcon from './assets/icons/cart_ico.svg';
import FavoritesIcon from './assets/icons/fav_ico.svg';
import AccountIcon from './assets/icons/acc_ico.svg';

// Import Screens
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomScreen';
import AuthScreen from './screens/AuthScreen';
import LocationScreen from './screens/LocationScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import AccountScreen from './screens/AccountScreen';

// Create Navigator Instances
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Function to render tab icons dynamically.
 * This reduces duplication in the tabBarIcon logic.
 */
const renderTabIcon = (routeName: string, color: string) => {
  const iconSize = 24;

  switch (routeName) {
    case 'Home':
      return <HomeIcon width={iconSize} height={iconSize} color={color} />;
    case 'Explore':
      return <ExploreIcon width={iconSize} height={iconSize} color={color} />;
    case 'Cart':
      return <CartIcon width={iconSize} height={iconSize} color={color} />;
    case 'Favorites':
      return <FavoritesIcon width={iconSize} height={iconSize} color={color} />;
    case 'Account':
      return <AccountIcon width={iconSize} height={iconSize} color={color} />;
    default:
      return null;
  }
};

/**
 * Bottom Tab Navigator Component
 */
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false, // Hide headers for all tabs
      tabBarActiveTintColor: '#53B175',
      tabBarInactiveTintColor: '#181725',
      tabBarStyle: {
        height: 70,
        paddingTop: 8,
      },
      tabBarIcon: ({color}) => renderTabIcon(route.name, color),
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Favorites" component={FavoriteScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

/**
 * Main App Component with Stack Navigator
 */
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          {/* Authentication and Setup Screens */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="LocationScreen" component={LocationScreen} />

          {/* Main Application */}
          <Stack.Screen name="MainTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
