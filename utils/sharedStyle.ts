import {
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const sharedTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withTiming(values.targetHeight, { duration: 500 }),
    width: withTiming(values.targetWidth, { duration: 500 }),
    originX: withTiming(values.targetOriginX),
    originY: withTiming(values.targetOriginY),
  };
});
