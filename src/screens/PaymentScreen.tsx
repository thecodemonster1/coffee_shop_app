import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

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
]

const PaymentScreen = () => {
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})