import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Regular from 'typography/regular-text';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
const LabelValue = ({
  label,
  value,
  labelStyle,
  valueStyle,
  labelFlex = 0.4,
  valueFlex = 1,
}) => {
  return (
    <Row style={{paddingBottom: mvs(10)}}>
      <Regular
        label={label}
        fontSize={mvs(13)}
        color={colors.white}
        style={[{flex: labelFlex}, labelStyle]}
      />
      <Regular
        label={value}
        fontSize={mvs(13)}
        color={colors.white}
        style={[{flex: valueFlex}, valueStyle]}
      />
    </Row>
  );
};

export default LabelValue;

const styles = StyleSheet.create({});
