import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {mvs} from '../../../config/metrices';
type props = {
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  onPress?: () => void;
};
export const TouchableRow = (props: props) => {
  const {children, style, onPress = () => {}} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.contentContainerStyle, style]}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: mvs(8),
    // paddingHorizontal: mvs(10),
  },
});
