import { StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { Checkbox } from 'expo-checkbox';
import { IIngredientsWithSelectionStatus } from './types/interface';
import useInredientsStore from './useIngredients.store';
import SelectedImage from '@components/common/Images/SelectedImage';
import PriceAndQuantity from '@components/common/GroupText/PriceAndQuantity';

interface IIngredientsCardProps {
  item: IIngredientsWithSelectionStatus;
  index: number;
}

const IngredientsCard = ({ item, index }: IIngredientsCardProps) => {
  const { selectIngredient, unselectedInredient } = useInredientsStore();

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 50).duration(index * 50)}
      exiting={FadeOutLeft.delay(index * 50)}
      key={item.name}
      style={styles.ingredientCardContainer}
    >
      <SelectedImage uri={item.imageUri} />
      <PriceAndQuantity name={item.name} quantity={item.quantity} />
      <Checkbox
        color={'black'}
        style={{
          height: 16,
          width: 16,
          backgroundColor: 'white',
        }}
        value={item.isSelected}
        onValueChange={val => {
          if (val) {
            selectIngredient(item.name);
          } else {
            unselectedInredient(item.name);
          }
        }}
      />
    </Animated.View>
  );
};

export default IngredientsCard;

const styles = StyleSheet.create({
  ingredientCardContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
