import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CartItemProps {
  id: string;
  title: string;
  imagelink_square: ImageProps;
  special_ingridient: string;
  roasted: string;
  prices: any;
  type: string;
  incrementCartItemQuantityHandler: any;
  decrementCartItemQuantityHandler: any;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  imagelink_square,
  special_ingridient,
  roasted,
  prices,
  type,
  incrementCartItemQuantityHandler,
  decrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      <Text>CartItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
