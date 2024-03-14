import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../theme/theme';

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
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.CartItemLinearGradient}>
            <View>
              <Image source={imagelink_square} style={styles.CartItemImage}></Image>
            </View>
          </LinearGradient>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  CartItemLinearGradient: {},
  CartItemImage: {
    height: 130,
    width: 130,
  },
});

export default CartItem;
