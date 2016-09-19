import React from 'react';
import { TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';
import { COMMON_SELECT_COLOR } from './Const';

function TouchableIOS(props) {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor={COMMON_SELECT_COLOR}
      {...props}
    />
  );
}

const CommonTouchComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableIOS;

export default CommonTouchComponent;
