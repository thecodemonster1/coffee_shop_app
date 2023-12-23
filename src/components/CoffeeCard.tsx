import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

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
              size={FONTSIZE.size_18}/>
            <Text style={styles.CardRatingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text>{name}</Text>
        <Text>{special_ingredient}</Text>
        <View>
          <Text>
            $ <Text>{price.price}</Text>
          </Text>
          <TouchableOpacity>
            {/* <BGIcon /> */}
          </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  CardLinearGradientContainer: {},
  CardImageBG: {
    width: CARD_WIDHT,
    height: CARD_WIDHT,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {},
  CardRatingText: {},
})

export default CoffeeCard