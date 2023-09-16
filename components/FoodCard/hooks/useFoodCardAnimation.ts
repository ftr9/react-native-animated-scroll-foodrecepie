import { IFoodCardProps } from '../types/interface';
import { SCREEN_WIDTH } from '../../../constants/Resolution';
import { useAnimatedStyle, interpolate } from 'react-native-reanimated';

const useFoodCardAnimation = (props: IFoodCardProps) => {
  const { item, scrollValue } = props;

  //// animate Y position and roation of main dish
  const animatedYPosAndRotation = useAnimatedStyle(() => {
    const interpolatedYPos = interpolate(
      scrollValue.value,
      item.inputXRange,
      item.outputYRange
    );
    const interpolatedRotation = interpolate(
      scrollValue.value,
      item.inputXRange,
      item.ouputRotationRange
    );
    return {
      transform: [
        { translateY: interpolatedYPos },
        { rotate: `${interpolatedRotation}deg` },
      ],
    };
  });

  ////animate opacity of food name and price
  const animatedTextOpacity = useAnimatedStyle(() => {
    const clone = [...item.inputXRange];
    clone[0] += (80 / 100) * SCREEN_WIDTH;
    clone[clone.length - 1] -= (80 / 100) * SCREEN_WIDTH;

    const interpolatedOpacity = interpolate(
      scrollValue.value,
      clone,
      item.outputTextOpacityRange
    );

    return {
      opacity: interpolatedOpacity,
    };
  });

  ////animate opacity of large absolute background image
  const animatedBackgroundImageOpacity = useAnimatedStyle(() => {
    const interpolatedOpacity = interpolate(
      scrollValue.value,
      item.inputXRange,
      [0, 0.3, 0]
    );
    const interpolatedRotation = interpolate(
      scrollValue.value,
      item.inputXRange,
      [-30, 0, 30]
    );

    return {
      opacity: interpolatedOpacity,
      transform: [
        { rotate: `${interpolatedRotation}deg` },
        { translateY: -100 },
        { scale: 1.2 },
      ],
    };
  });

  return {
    animatedYPosAndRotation,
    animatedTextOpacity,
    animatedBackgroundImageOpacity,
  };
};

export default useFoodCardAnimation;
