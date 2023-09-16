import { StyleSheet, Text } from 'react-native';
import React from 'react';

import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import CtaButton from '../common/Button/CtaButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import useCheckOutAnimation from './hooks/useCheckoutAnimation';

const CheckOutCart = () => {
  const {
    checkOutClickHandle,
    AnimatedHeightStyle,
    AnimatedYPosStyle,
    AnimatedOpacityStyle,
    isCheckoutComplete,
    isMakingPayment,
    checkMarkBtnClickHandle,
  } = useCheckOutAnimation();

  return (
    <Animated.View style={[styles.checkOutCartContainer, AnimatedYPosStyle]}>
      <Animated.View style={[styles.animateAbleContainer, AnimatedHeightStyle]}>
        {isCheckoutComplete && (
          <Animated.View
            exiting={FadeOutUp.duration(500)}
            entering={FadeInDown.duration(500)}
          >
            <Text style={styles.checkOutCartAmountText}>Amount</Text>
            <Text style={{ color: 'white', fontSize: 24, textAlign: 'center' }}>
              100 $
            </Text>

            <Ionicons
              onPress={checkMarkBtnClickHandle}
              style={{
                textAlign: 'center',
                marginTop: 25,
              }}
              name="checkmark-circle-outline"
              size={100}
              color={'#CC465F'}
            />
          </Animated.View>
        )}

        {!isCheckoutComplete && (
          <Animated.View style={AnimatedOpacityStyle} exiting={FadeOutUp}>
            <CtaButton
              title={isMakingPayment ? 'Hold on a sec..' : 'Checkout'}
              onClick={checkOutClickHandle}
            />
          </Animated.View>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default CheckOutCart;

const styles = StyleSheet.create({
  checkOutCartContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  animateAbleContainer: {
    backgroundColor: 'black',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOutCartAmountText: {
    color: 'white',
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 16,
  },
});
