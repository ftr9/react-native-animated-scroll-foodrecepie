import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CartCardRenderer from '../components/cart/CartCardRenderer';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckOutCart from '../components/cart/CheckOutCart';

const Cart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 20,
        }}
      >
        My Orders
      </Text>
      <CartCardRenderer />
      <CheckOutCart />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
