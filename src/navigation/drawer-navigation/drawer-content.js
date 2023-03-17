import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import * as SVGS from '../../assets/icons';
import {Row} from '../../components/atoms/row';
import {TouchableRow} from '../../components/atoms/touchable-row';
import {colors} from '../../config/colors';
import {CATEGORIES} from '../../config/constants';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as IMG from '../../assets/images';
import {navigate} from 'navigation/navigation-ref';

const CustomDrawerContent = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        borderTopEndRadius: mvs(20),
      }}>
      <View
        style={{
          height: mvs(220),
          width: '100%',
          paddingVertical: mvs(17),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: mvs(2),
          borderBottomColor: colors.primary,
        }}>
        <Image
          source={IMG.cash}
          resizeMode="contain"
          style={{
            width: mvs(80),
            height: mvs(80),
            borderRadius: mvs(40),
          }}
        />
        <Bold
          label={'Ali Abdullah'}
          color={colors.primary}
          fontSize={mvs(16)}
        />
        <Medium
          label={'ali@gmail.com'}
          color={colors.primary}
          fontSize={mvs(14)}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: mvs(20),
          borderBottomWidth: 2,
          borderBottomColor: colors.red,
        }}>
        {CATEGORIES.map(x => {
          const icon = IMG[x?.icon];
          return (
            <TouchableRow
              style={{marginTop: mvs(20)}}
              onPress={() => props?.navigation?.navigate(x.screen)}>
              <Image source={icon} style={{height: mvs(20), width: mvs(20)}} />
              <Bold
                label={x?.title}
                style={{marginLeft: mvs(20)}}
                color={colors.black}
              />
            </TouchableRow>
          );
        })}
      </ScrollView>
      <Row
        style={{
          paddingVertical: mvs(20),
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: mvs(10),
          }}
          onPress={() => navigate('Login')}>
          <Row style={{alignItems: 'center', justifyContent: 'flex-start'}}>
            <MaterialIcons name="logout" color={colors.red} size={mvs(18)} />
            <Bold
              label={'Sign Out'}
              color={colors.red}
              fontSize={mvs(18)}
              style={{marginLeft: mvs(20)}}
            />
          </Row>
        </TouchableOpacity>
      </Row>
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  row: {
    width: mvs(100),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    lineHeight: mvs(20),
    fontSize: mvs(16),
    color: colors.white,
    marginHorizontal: mvs(7),
  },
  linearGradient: {height: StyleSheet.hairlineWidth},
  linearGradientv: {
    width: StyleSheet.hairlineWidth,
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
  },
  mainRow: {
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(25),
  },
});
