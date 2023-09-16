import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Animated, { FadeInDown, FadeOutLeft } from 'react-native-reanimated';
import CtaButton from '../common/Button/CtaButton';
import { SCREEN_HEIGHT } from '../../constants/Resolution';
import DottedCtaButton from '../common/Button/DottedCtaButton';
import { IIngredients } from './types/interface';
import Ionicons from '@expo/vector-icons/Ionicons';
import IngredientsCard from './IngredientsCard';
import useInredientsStore from './useIngredients.store';
import { router, useRouter } from 'expo-router';

interface IIngredientsRendererProps {
  isIngredientCardVisible: boolean;
  setIngredientCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const IngredientsRenderer = ({
  isIngredientCardVisible,
  setIngredientCardVisible,
}: IIngredientsRendererProps) => {
  const router = useRouter();
  const { ingredients, getSelectedIngredients } = useInredientsStore();
  const onCloseHandle = () => {
    setIngredientCardVisible(false);
  };

  const addIngredientsHandle = () => {
    router.push('/cart');
  };

  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOutLeft.delay(ingredients.length * 50)}
      style={styles.rendererContainer}
    >
      <View style={styles.rendereHeader}>
        <Ionicons onPress={onCloseHandle} name="chevron-down" size={24} />
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {ingredients.map((el, index) => {
          if (isIngredientCardVisible) {
            return <IngredientsCard key={index} item={el} index={index} />;
          }
        })}
        <View
          style={{
            marginTop: 15,
            paddingHorizontal: 10,
          }}
        >
          <DottedCtaButton
            title="Add Ingredients"
            onClick={addIngredientsHandle}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default IngredientsRenderer;

const styles = StyleSheet.create({
  rendererContainer: {
    position: 'absolute',
    height: SCREEN_HEIGHT / 2,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    left: 0,
    zIndex: 1000,
    paddingVertical: 10,
    bottom: 0,
  },
  rendereHeader: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 0.5,
  },
});
