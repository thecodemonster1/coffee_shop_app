import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation = () => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
    </View>
  );
};
// 5:20 in video

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LottieStyle: {
    height: 300,
  },
});

export default EmptyListAnimation;
