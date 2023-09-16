import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SelectedImage = ({ uri }: { uri: string }) => {
  return (
    <Image
      style={styles.ingredientCardImg}
      source={{
        uri,
      }}
    />
  );
};

export default SelectedImage;

const styles = StyleSheet.create({
  ingredientCardImg: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 20,
  },
});
