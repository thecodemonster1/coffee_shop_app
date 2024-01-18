import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';

const DetailsScreen = ({navigation, route}: any) => {
  // console.log('route = ', route.params); // confirm (test) the parameters are working
  const itemsOfIndex = useStore((state: any) =>
    route.params.type == 'coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
