import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  withRepeat,
  cancelAnimation,
} from 'react-native-reanimated';
import { useState } from 'react';
import { SCREEN_HEIGHT } from '../../../constants/Resolution';
import { useRouter } from 'expo-router';

const useCheckOutAnimation = () => {
  const router = useRouter();
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [isMakingPayment, setIsMakingPayment] = useState(false);
  const SharedHeightValue = useSharedValue(50);
  const SharedYPosValue = useSharedValue(0);
  const SharedOpacityValue = useSharedValue(1);

  const AnimatedHeightStyle = useAnimatedStyle(() => {
    return {
      height: SharedHeightValue.value,
    };
  });

  const AnimatedYPosStyle = useAnimatedStyle(() => {
    return {
      bottom: SharedYPosValue.value,
    };
  });

  const AnimatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: SharedOpacityValue.value,
    };
  });

  const checkOutClickHandle = async () => {
    setIsMakingPayment(true);
    SharedOpacityValue.value = withRepeat(
      withTiming(0, { duration: 500 }),
      -1,
      true
    );

    await new Promise(resolve => setTimeout(() => resolve(''), 3000));

    const halfScreenHeight = (40 / 100) * SCREEN_HEIGHT;
    SharedYPosValue.value = withTiming(50, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    SharedHeightValue.value = withTiming(halfScreenHeight, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    await new Promise(resolve => setTimeout(() => resolve(''), 1000));

    cancelAnimation(SharedOpacityValue);
    setIsCheckoutComplete(true);
    setIsMakingPayment(false);
  };

  const checkMarkBtnClickHandle = () => {
    setIsCheckoutComplete(false);
    SharedYPosValue.value = withTiming(0, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    SharedHeightValue.value = withTiming(50, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    setTimeout(() => {
      router.back();
    }, 1000);
  };

  return {
    AnimatedHeightStyle,
    AnimatedYPosStyle,
    SharedHeightValue,
    isMakingPayment,
    isCheckoutComplete,
    setIsCheckoutComplete,
    AnimatedOpacityStyle,
    SharedYPosValue,
    checkOutClickHandle,
    checkMarkBtnClickHandle,
  };
};

export default useCheckOutAnimation;
