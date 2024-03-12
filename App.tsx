import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';

import FavoritesScreen from './src/screens/FavoritesScreen';
import CartScreen from './src/screens/CartScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
      <NavigationContainer>
        {/* This safeAreaView for iOS  */}
        <SafeAreaView>
          {/* <View style={{ flex: 1,}}>
          </View> */}
        </SafeAreaView>
        {/* When you don't want the header bar make headerShown to false 👇*/}
        <Stack.Navigator screenOptions={{headerShown: false, headerTitle: ''}}> 
          <Stack.Screen 
            name="Tab"
            component={TabNavigator} 
            options={{animation: 'slide_from_bottom'}}/>
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            options={{animation: 'slide_from_bottom'}}/>
          <Stack.Screen 
            name="Payment" 
            component={PaymentScreen} 
            options={{animation: 'slide_from_bottom'}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  )
}

export default App