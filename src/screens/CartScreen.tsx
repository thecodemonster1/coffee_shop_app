import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.CartList); // initializing the cartList
  const cartPrice = useStore((state: any) => state.CartPrice); // getting the total price of items in the cart
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  // 5:09:58 in video
  console.log('CartList = ', cartList.length);
  // console.log('CartPrice = ', cartPrice);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
