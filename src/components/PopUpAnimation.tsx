import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PopUpAnimationProp {
  style: any;
  source: any;
}

const PopUpAnimation: React.FC<PopUpAnimationProp> = (style, source) => {
  return (
    <View>
      <Text>PopUpAnimation</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PopUpAnimation;
