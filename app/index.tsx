import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import FoodCardRenderer from '@components/FoodCard/FoodCardRenderer';
import IngredientsRenderer from '@components/Ingredients/IngredientsRenderer';
import CtaButton from '@components/common/Button/CtaButton';

const MainPage = () => {
  const [isIngredientCardVisible, setIngredientCardVisible] = useState(false);

  const ctaBtnClickHandle = () => {
    setIngredientCardVisible(true);
  };

  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      style={styles.mainPageContainer}
    >
      <FoodCardRenderer />

      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <CtaButton title="View Ingredients" onClick={ctaBtnClickHandle} />
        <Text style={styles.lastText}>Swipe To See More</Text>
      </View>

      {isIngredientCardVisible && (
        <IngredientsRenderer
          isIngredientCardVisible
          setIngredientCardVisible={setIngredientCardVisible}
        />
      )}
    </Animated.View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainPageContainer: {
    flex: 1,
    position: 'relative',
  },
  lastText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 30,
  },
});
