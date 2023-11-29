import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/theme';

interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}

const GradientBGIcon = () => {
  return (
    <View style={styles.Container}>
      {/* 1:30 in Video */}
      <linearGradient 
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} 
        style={styles.LinearGradientBG}></linearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {},
  LinearGradientBG: {},
})

export default GradientBGIcon