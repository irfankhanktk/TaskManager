import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Medium from 'typography/medium-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {SearchInput} from '../inputs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Row} from '../row';
const HeaderX = ({
  style = {},
  title,
  back = false,
  onChangeText = t => {},
  isSearch = false,
  placeholder = 'Search here',
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrow-back' : 'arrow-back'}
            size={mvs(30)}
            color={colors.primary}
          />
        </TouchableOpacity>
        <Medium fontSize={mvs(20)} label={title} style={[styles.title]} />
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation?.navigate('Deapartments')}>
          <AntDesign name="pluscircle" size={mvs(18)} color={colors.white} />
          <Medium label={'Add'} fontSize={mvs(13)} color={colors.white} />
        </TouchableOpacity>

        {/* <View style={styles.empty} /> */}
      </Row>
      {/* {isSearch && <SearchInput onChangeText={onChangeText} placeholder={placeholder} />} */}
    </View>
  );
};
export default React.memo(HeaderX);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(15),
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
    color: colors.primary,
  },
  back: {},
  filter: {
    width: mvs(91),
    paddingHorizontal: mvs(17),
    paddingVertical: mvs(8),
    borderwidth: 10,
    backgroundColor: colors.primary,
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
