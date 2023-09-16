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

  ////After the payment is completed increase the height of animateable container
  const AnimatedHeightStyle = useAnimatedStyle(() => {
    return {
      height: SharedHeightValue.value,
    };
  });

  ////After the payment is completed move the bottom position of animateable container
  const AnimatedYPosStyle = useAnimatedStyle(() => {
    return {
      bottom: SharedYPosValue.value,
    };
  });

  ////Used for blinking the button when payment is started
  const AnimatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: SharedOpacityValue.value,
    };
  });

  const checkOutClickHandle = async () => {
    setIsMakingPayment(true);

    //// Start the blink animation of button
    SharedOpacityValue.value = withRepeat(
      withTiming(0, { duration: 500 }),
      -1,
      true
    );

    await new Promise(resolve => setTimeout(() => resolve(''), 3000));

    ////After the payment is completed increase the height of animatable container
    const halfScreenHeight = (40 / 100) * SCREEN_HEIGHT;
    SharedYPosValue.value = withTiming(50, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });

    ////At the same time move the animatable container from bottom 0 to halfScreenHeight value
    SharedHeightValue.value = withTiming(halfScreenHeight, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    await new Promise(resolve => setTimeout(() => resolve(''), 1000));

    ////Cancel the blinking animation of button
    cancelAnimation(SharedOpacityValue);

    setIsCheckoutComplete(true);
    setIsMakingPayment(false);
  };

  const checkMarkBtnClickHandle = () => {
    setIsCheckoutComplete(false);

    ////Reset the animated value of height and bottom to initial value
    SharedYPosValue.value = withTiming(0, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });
    SharedHeightValue.value = withTiming(50, {
      duration: 800,
      easing: Easing.in(Easing.quad),
    });

    ////After the animation completed go back to main page
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
