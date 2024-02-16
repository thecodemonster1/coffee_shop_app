import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native' // Image import
import { COLORS, SPACING } from '../theme/theme'

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image 
        source={require('../assets/app_images/avatar.png')} 
        style={styles.Image} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer: {
    // height: SPACING.space_36,
    // width: SPACING.space_36,
    height: 60,
    width: 60,
    borderRadius: SPACING.space_12,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    // height: SPACING.space_36,
    // width: SPACING.space_36,
    height: 50,
    width: 50,
  },
})

export default ProfilePic

// 1:33:25 in video
