import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/theme';
import LottieView from 'lottie-react-native';

interface PopUpAnimationProp {
  style: any;
  source: any;
}

const PopUpAnimation: React.FC<PopUpAnimationProp> = (style, source) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView /> 
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.primaryBlackRGBA,
    justifyContent: 'center',
  },
});

export default PopUpAnimation;
