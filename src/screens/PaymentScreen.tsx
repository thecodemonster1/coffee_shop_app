import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTSIZE} from '../theme/theme';
import GradientBGIcon from '../components/GradientBGIcon';

const paymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentScreen = () => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity >
            <GradientBGIcon name='left' color={COLORS.primaryBlackHex} size={FONTSIZE.size_16} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {},
  HeaderContainer: {},
});
