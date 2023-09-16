import { StyleSheet, Text } from 'react-native';
import React from 'react';
import CartCardRenderer from '@components/cart/CartCardRenderer';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckOutCart from '@components/cart/CheckOutCart';

const Cart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text style={styles.cartText}>My Orders</Text>
      <CartCardRenderer />
      <CheckOutCart />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartText: {
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
