import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  SharedTransition,
  FadeInUp,
  Easing,
  FadeInDown,
} from 'react-native-reanimated';
import { sharedTransition } from '../../utils/sharedStyle';

const Destination = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Text>Destination</Text>
      <Animated.View
        sharedTransitionStyle={sharedTransition}
        sharedTransitionTag="first"
        style={{
          backgroundColor: 'green',
          height: 200,
          width: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      ></Animated.View>
      <Animated.Text
        entering={FadeInDown.delay(500)
          .duration(500)
          .easing(Easing.bezierFn(1, 0.14, 0.12, 0.7))}
      >
        To create a shared transition animation between two components on
        different screens, simply assign the same sharedTransitionTag to both
        components. When you navigate between screens, the shared transition
        animation will automatically play. The shared transition feature works
        by searching for two components that have been registered with the same
        sharedTransitionTag. If you want to use more than one shared view on the
        same screen, be sure to assign a unique shared tag to each component.
      </Animated.Text>
    </View>
  );
};

export default Destination;

const styles = StyleSheet.create({});
