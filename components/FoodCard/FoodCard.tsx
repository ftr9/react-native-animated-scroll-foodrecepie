import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { IFoodCardProps } from './types/interface';
import useFoodCardAnimation from './hooks/useFoodCardAnimation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/Resolution';

const FoodCard = (props: IFoodCardProps) => {
  const { item } = props;
  const {
    animatedYPosAndRotation,
    animatedTextOpacity,
    animatedBackgroundImageOpacity,
  } = useFoodCardAnimation(props);

  return (
    <View style={styles.cardContainer}>
      {/* Absolute positioned Bg Image */}
      <Animated.View
        style={[styles.absoluteBgContainer, animatedBackgroundImageOpacity]}
      >
        <View style={styles.absoluteBgImage}>
          <Image
            source={item.image}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
      </Animated.View>

      {/**Main Image */}
      <Animated.View style={[styles.mainImage, animatedYPosAndRotation]}>
        <Image
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </Animated.View>

      {/**Text - price and food name */}
      <Animated.View style={[styles.textContainer, animatedTextOpacity]}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '600',
            color: '#222223',
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#CC465F',
            marginTop: 10,
          }}
        >
          {item.price} $
        </Text>
      </Animated.View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: SCREEN_WIDTH,
    height: (74 / 100) * SCREEN_HEIGHT,
  },
  absoluteBgContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  absoluteBgImage: {
    height: (90 / 100) * SCREEN_WIDTH,
    width: (90 / 100) * SCREEN_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainImage: {
    height: (70 / 100) * SCREEN_WIDTH,
    width: (70 / 100) * SCREEN_WIDTH,
    marginLeft: 'auto',
    marginTop: 160,
    borderRadius: 100,
    marginRight: 'auto',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});
