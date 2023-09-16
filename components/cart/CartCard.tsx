import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { FadeInRight } from 'react-native-reanimated';
import SelectedImage from '../common/Images/SelectedImage';
import PriceAAndQuantity from '../common/GroupText/PriceAndQuantity';
import { IIngredientsWithSelectionStatus } from '../Ingredients/types/interface';
import Ionicons from '@expo/vector-icons/Ionicons';
import useIngredientsStore from '../Ingredients/useIngredients.store';

interface ICartCardProp {
  item: IIngredientsWithSelectionStatus;
  index: number;
}

const CartCard = ({ item, index }: ICartCardProp) => {
  const { unselectedInredient } = useIngredientsStore();

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 50).duration(index * 50)}
      style={styles.cartContainer}
    >
      <SelectedImage uri={item.imageUri} />
      <PriceAAndQuantity quantity={item.quantity} name={item.name} />
      <TouchableOpacity onPress={() => unselectedInredient(item.name)}>
        <Ionicons name="remove-circle" size={24} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
