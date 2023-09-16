import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useIngredientsStore from '../Ingredients/useIngredients.store';
import { FlatList } from 'react-native-gesture-handler';
import CartCard from './CartCard';

const CartCardRenderer = () => {
  const { getSelectedIngredients } = useIngredientsStore();

  return (
    <FlatList
      keyExtractor={item => item.name}
      data={getSelectedIngredients()}
      renderItem={({ item, index }) => {
        return <CartCard item={item} index={index} />;
      }}
    />
  );
};

export default CartCardRenderer;

const styles = StyleSheet.create({});
