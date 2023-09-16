import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface ICtaButtonProps {
  onClick: () => void;
  title: string;
}

const CtaButton = ({ onClick, title }: ICtaButtonProps) => {
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
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CtaButton;

const styles = StyleSheet.create({});
