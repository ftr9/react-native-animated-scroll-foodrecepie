import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import FoodCardRenderer from '../components/FoodCard/FoodCardRenderer';
import IngredientsRenderer from '../components/Ingredients/IngredientsRenderer';
import CtaButton from '../components/common/Button/CtaButton';
import { SCREEN_HEIGHT } from '../constants/Resolution';

const MainPage = () => {
  const scrollViewYPosValue = useSharedValue(-SCREEN_HEIGHT / 2);

  const ctaBtnClickHandle = () => {
    scrollViewYPosValue.value = withTiming(0, {
      duration: 500,
    });
  };

  return (
    <View style={styles.mainPageContainer}>
      <FoodCardRenderer />
      <IngredientsRenderer scrollViewYPosValue={scrollViewYPosValue} />
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <CtaButton onClick={ctaBtnClickHandle} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500',
            marginVertical: 30,
          }}
        >
          Swipe To See Recepie
        </Text>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainPageContainer: {
    flex: 1,
    position: 'relative',
  },
});
