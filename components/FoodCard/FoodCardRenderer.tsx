import { StyleSheet, Dimensions, FlatList } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { IFoods } from './types/interface';
import FoodCard from './FoodCard';

const OUTPUT_Y_RANGE = [180, 0, 180];
const OUTPUT_ROTATION_RANGE = [0, 90, 180];
const OUTPUT_TEXT_OPACITY_RANGE = [0, 1, 0];

const foods: IFoods[] = [
  {
    name: 'Caesar salad',
    price: 150,
    image: require('@assets/images/food3.png'),
    inputXRange: [-360, 0, 360],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
  {
    name: 'Pineapple Greek Salad',
    price: 250,
    image: require('@assets/images/food4.png'),
    inputXRange: [0, 360, 720],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
  {
    name: 'Veal Steak & Potato',
    price: 450,
    image: require('@assets/images/food5.png'),
    inputXRange: [360, 720, 1080],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
  {
    name: 'Avocado Toast & Egg',
    price: 50,
    image: require('@assets/images/food6.png'),
    inputXRange: [720, 1080, 1440],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
  {
    name: 'Tom yum',
    price: 350,
    image: require('@assets/images/food7.png'),
    inputXRange: [1080, 1440, 1800],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
  {
    name: 'Chipotle Lime Shrimp',
    price: 250,
    image: require('@assets/images/food8.png'),
    inputXRange: [1440, 1800, 2160],
    outputYRange: OUTPUT_Y_RANGE,
    ouputRotationRange: OUTPUT_ROTATION_RANGE,
    outputTextOpacityRange: OUTPUT_TEXT_OPACITY_RANGE,
  },
];

const FoodCardRenderer = () => {
  const scrollValue = useSharedValue(0);

  const onScrollHandle = useAnimatedScrollHandler(e => {
    scrollValue.value = e.contentOffset.x;
  });

  return (
    <Animated.FlatList
      onScroll={onScrollHandle}
      data={foods}
      horizontal
      snapToAlignment={'center'}
      decelerationRate={0.6}
      snapToInterval={Dimensions.get('window').width}
      renderItem={({ item }) => {
        return <FoodCard item={item} scrollValue={scrollValue} />;
      }}
    />
  );
};

export default FoodCardRenderer;

const styles = StyleSheet.create({});
