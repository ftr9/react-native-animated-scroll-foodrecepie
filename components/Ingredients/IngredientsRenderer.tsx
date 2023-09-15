import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  SharedValue,
  FadeInRight,
} from 'react-native-reanimated';
import CtaButton from '../common/Button/CtaButton';
import { SCREEN_HEIGHT } from '../../constants/Resolution';
import DottedCtaButton from '../common/Button/DottedCtaButton';
import { IIngredients } from './types/interface';

interface IIngredientsRendererProps {
  scrollViewYPosValue: SharedValue<number>;
}

const ingredients: IIngredients[] = [
  {
    imageUri:
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Carrot',
    quantity: '15g',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Onion',
    quantity: '20g',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/1775037/pexels-photo-1775037.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Croissants',
    quantity: '50g',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Mustard',
    quantity: '80g',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Yoghurt',
    quantity: '90g',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Almonds',
    quantity: '10 cloves',
  },
  {
    imageUri:
      'https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Chicken',
    quantity: 'Full size',
  },
];

const IngredientsRenderer = ({
  scrollViewYPosValue,
}: IIngredientsRendererProps) => {
  const animatedScrollViewYPosStyle = useAnimatedStyle(() => {
    return {
      bottom: scrollViewYPosValue.value,
    };
  });

  const onCloseHandle = () => {
    scrollViewYPosValue.value = withTiming(-SCREEN_HEIGHT / 2, {
      duration: 200,
    });
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          height: SCREEN_HEIGHT / 2,
          width: Dimensions.get('window').width,
          backgroundColor: 'white',
          left: 0,
          zIndex: 1000,
          padding: 10,
        },
        animatedScrollViewYPosStyle,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text>Ingredients</Text>
        <Button onPress={onCloseHandle} title="close" />
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {ingredients.map((el, index) => (
          <Animated.View
            entering={FadeInRight.duration(index * 10)}
            key={el.name}
            style={{
              padding: 10,
              flexDirection: 'row',
            }}
          >
            <Image
              source={{
                uri: el.imageUri,
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 10,
                marginRight: 20,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                {el.name}
              </Text>
              <Text
                style={{
                  color: '#a3a3a3',
                }}
              >
                {el.quantity}
              </Text>
            </View>
          </Animated.View>
        ))}
        <DottedCtaButton onClick={() => console.log('coo')} />
      </ScrollView>
    </Animated.View>
  );
};

export default IngredientsRenderer;

const styles = StyleSheet.create({});
