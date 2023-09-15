import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface IDottedCtaButtonProps {
  onClick: () => void;
}

const DottedCtaButton = ({ onClick }: IDottedCtaButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'transparent',
        paddingVertical: 16,
        borderRadius: 10,
        borderColor: '#CC465F',
        borderWidth: 0.8,
        borderStyle: 'dashed',
      }}
      onPress={onClick}
    >
      <Text
        style={{
          textAlign: 'center',
          color: '#cc465f',
          fontWeight: '500',
          fontSize: 16,
        }}
      >
        view ingredients
      </Text>
    </TouchableOpacity>
  );
};

export default DottedCtaButton;

const styles = StyleSheet.create({});
