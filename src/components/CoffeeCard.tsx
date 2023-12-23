import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';

const CARD_WIDHT = Dimensions.get('window').width * 0.32;

interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: string;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}
{/* 2:04:44 in Video */}
const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
return (
  <LinearGradient
    start={{x:0, y:0}}
    end={{x:1, y:1}}
    style={styles.CardLinearGradientContainer}
    colors={[COLORS.primaryGreyHex ,COLORS.primaryBlackHex]}>
      <ImageBackground 
        source={imagelink_square} 
        style={styles.CardImageBG}
        resizeMode='cover'>
          <View style={styles.CardRatingContainer}>
            <CustomIcon 
              name='star' 
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_16}/>
            <Text style={styles.CardRatingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.CardTitle}>{name}</Text>
        <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
        <View style={styles.CardFooterRow}>
          <Text style={styles.CardPriceCurrency}>
            $ <Text style={styles.CardPrice}>{price.price}</Text>
          </Text>
          <TouchableOpacity onPress={() => {}}>
            {/* <BGIcon /> */}
            <BGIcon 
              name={'add'}
              color={COLORS.primaryWhiteHex}
              size={FONTSIZE.size_10}
              BGColor={COLORS.primaryOrangeHex}
            />
          </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardImageBG: {
    width: CARD_WIDHT,
    height: CARD_WIDHT,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
})

export default CoffeeCard