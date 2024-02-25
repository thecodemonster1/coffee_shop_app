import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation = () => {
  return <View style={styles.EmptyCartContainer}></View>;
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EmptyListAnimation;
