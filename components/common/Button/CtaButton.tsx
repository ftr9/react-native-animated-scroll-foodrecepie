import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface ICtaButtonProps {
  onClick: () => void;
}

const CtaButton = ({ onClick }: ICtaButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'black',
        paddingVertical: 16,
        borderRadius: 10,
      }}
      onPress={onClick}
    >
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: '500',
          fontSize: 16,
        }}
      >
        view ingredients
      </Text>
    </TouchableOpacity>
  );
};

export default CtaButton;

const styles = StyleSheet.create({});
