import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.CartList); // initializing the cartList
  console.log("CartList = ", cartList.length);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
