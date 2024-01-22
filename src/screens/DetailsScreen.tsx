import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log('route = ', route.params); // confirm (test) the parameters are working
  const itemsOfIndex = useStore((state: any) =>
    route.params.type == 'coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={itemsOfIndex.imagelink_portrait}
          type={itemsOfIndex.type}
          id={itemsOfIndex.id}
          favourite={itemsOfIndex.favourite}
          name={itemsOfIndex.name}
          special_ingredient={itemsOfIndex.special_ingredient}
          ingredients={itemsOfIndex.ingredients}
          average_rating={itemsOfIndex.average_rating}
          ratings_count={itemsOfIndex.ratings_count}
          roasted={itemsOfIndex.roasted}
          BackHandler={() => {}}
          ToggleFavorite={() => {}}
        />
      </ScrollView>
    </View>
  );
}; // 3:37:36 in video

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    // backgroundColor: 'green',
  },
});

export default DetailsScreen;
