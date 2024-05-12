import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/theme';

interface PaymentMethodProps {
  // paymentMode={paymentMode}
  //               name={name}
  //               icon={icon}
  //               isIcon={isIcon}
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => {
  return (
    <View style={styles.PaymentCardContainer}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.LinearGradientWallet}></LinearGradient>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  PaymentCardContainer: {},
  LinearGradientWallet: {},
});

export default PaymentMethod;
