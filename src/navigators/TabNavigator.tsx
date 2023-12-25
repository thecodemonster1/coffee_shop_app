import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
const tabBar_active = COLORS.primaryOrangeHex;
const tabBar_unactive = COLORS.primaryLightGreyHex;

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground:() => (
        <BlurView overlayColor='' blurAmount={50} style={styles.BlurViewStyles} />
      )
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="home" 
            size={25} 
            color={
              focused?tabBar_active : tabBar_unactive
            } 
          />
        )
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="cart" 
            size={25} 
            color={
              focused?tabBar_active : tabBar_unactive
            } 
          />
        )
      }}/>
      <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="like" 
            size={25} 
            color={
              focused?tabBar_active : tabBar_unactive
            } 
          />
        )
      }}/>
      <Tab.Screen name="History" component={OrderHistoryScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomIcon 
            name="bell" 
            size={25} 
            color={
              focused?tabBar_active : tabBar_unactive
            } 
          />
        )
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 1,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator
