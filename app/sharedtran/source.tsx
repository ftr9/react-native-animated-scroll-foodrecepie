import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { sharedTransition } from '../../utils/sharedStyle';

const Dource = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Text>Dource</Text>
      <Animated.View
        sharedTransitionTag="first"
        sharedTransitionStyle={sharedTransition}
        style={{
          backgroundColor: 'green',
          height: 100,
          width: 100,
          marginLeft: 0,
          marginRight: 0,
        }}
      ></Animated.View>
      <Link href="/sharedtran/destination">
        <Text>Go to destination</Text>
      </Link>
    </View>
  );
};

export default Dource;

const styles = StyleSheet.create({});
