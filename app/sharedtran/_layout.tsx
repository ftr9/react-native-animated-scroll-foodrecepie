import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        animationDuration: 0,
      }}
    >
      <Stack.Screen name="destination" options={{}} />
      <Stack.Screen name="source" />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
