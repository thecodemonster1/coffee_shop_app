import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';

const CartScreen = () => {
  const cartList = useStore((state: any) => state.CartList); // initializing the cartList
  const cartPrice = useStore((state: any) => state.CartPrice); // getting the total price of items in the cart
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();
  // 5:09:58 in video
  console.log('CartList = ', cartList.length);
  // console.log('CartPrice = ', cartPrice);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}></ScrollView>
        <HeaderBar title="Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {},
  ScrollViewFlex: {flexGrow: 1},
});

export default CartScreen;
