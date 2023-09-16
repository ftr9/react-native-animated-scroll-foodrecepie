import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PriceAndQuantity = ({
  name,
  quantity,
}: {
  name: string;
  quantity: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: '#a3a3a3',
        }}
      >
        {quantity}
      </Text>
    </View>
  );
};

export default PriceAndQuantity;

const styles = StyleSheet.create({});
