import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
     <NavigationContainer>
      {/* When you don't want the header bar make headerShown to false 👇*/}
      <Stack.Navigator screenOptions={{headerShown: true}}> 
        <Stack.Screen 
          name="Tab" 
          component={TabNavigator} 
          options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen 
          name="Payments" 
          component={PaymentScreen} 
          options={{animation: 'slide_from_bottom'}}/>
        
      </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App