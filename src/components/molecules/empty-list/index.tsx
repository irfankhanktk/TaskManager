import {colors} from 'config/colors';
import React from 'react';
import {ColorValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import * as IMG from 'assets/images';
import {Chart} from 'assets/icons';
import LottieView from 'lottie-react-native';
import Medium from 'typography/medium-text';
import {mvs} from 'config/metrices';
type props = {
  style?: StyleProp<ViewStyle>;
  label?: string;
  color?: ColorValue;
  children?: JSX.Element | JSX.Element[];
};
export const EmptyList = (props: props) => {
  const {
    children,
    style,
    label = 'No Result Found',
    color = colors.primary,
  } = props;
  return (
    <View style={[styles.contentContainerStyle, style]}>
      {children}
      {/* <Medium label={label} color={color} /> */}
      <LottieView
        source={IMG.noDatagif}
        autoPlay={true}
        loop={true}
        style={styles.gifstyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifstyle: {
    width: mvs(200),
    height: mvs(200),
  },
});
