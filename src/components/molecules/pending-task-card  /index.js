import {login_bg} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {APPOINTMNETSTATUS} from 'config/constants';
import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import i18n from 'translation';
import Regular from 'typography/regular-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Medium from '../../../typography/medium-text';
import CircularProgress from 'react-native-circular-progress-indicator';
import {UTILS} from '../../../utils';
import * as IMG from 'assets/images';
import {Chart} from 'assets/icons';
import LottieView from 'lottie-react-native';
import Bold from 'typography/bold-text';
import LabelValue from '../label-view';
const PendingTaskCard = ({
  item,
  style,
  onPress = () => {},

  children,
}) => {
  const {t} = i18n;
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          alignSelf: 'flex-start',
        }}>
        {children}
      </View>
      <View style={{flex: 1, marginLeft: mvs(10)}}>
        <Bold label={item.title} fontSize={mvs(16)} />
        <View style={{paddingVertical: mvs(5)}}>
          <LabelValue
            label={item.text1}
            labelFlex={0.9}
            valueFlex={1}
            labelStyle={{color: colors.lightGray}}
            valueStyle={{color: colors.lightblack}}
          />
          <LabelValue
            label={item.text2}
            // value={item.stagetext}
            labelFlex={0.9}
            valueFlex={1}
            labelStyle={{color: colors.lightGray}}
            valueStyle={{color: colors.lightblack}}
          />
          <LabelValue
            label={item.stageheading}
            value={item.stagetext}
            labelFlex={0.9}
            valueFlex={0.2}
            labelStyle={{color: colors.lightGray}}
            valueStyle={{
              color: colors.white,
              backgroundColor: colors.attachmentcolor,
              borderRadius: mvs(5),
              padding: mvs(5),
              textAlign: 'center',
            }}
          />
          {/* </Row> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(PendingTaskCard);
const styles = StyleSheet.create({
  container: {
    marginBottom: mvs(20),
    backgroundColor: colors.white,
    marginHorizontal: mvs(5),
    borderRadius: mvs(10),
    borderLeftWidth: mvs(10),
    borderLeftColor: colors.primary,
    padding: mvs(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
  },
  leftContainer: {flex: 1, paddingVertical: mvs(10)},
  btnText: {color: colors.primary},
  btn: {
    width: '48%',
    height: mvs(38),
    backgroundColor: colors.white,
    borderWidth: 0.7,
    borderRadius: mvs(10),
    borderColor: colors.primary,
  },
  btnDetails: {width: '48%', height: mvs(38), borderRadius: mvs(10)},
  alignItems: {alignItems: 'center'},
  timeRow: {
    paddingHorizontal: mvs(10),
    borderColor: colors.border,
    marginTop: mvs(15),
    alignItems: 'center',
    paddingVertical: mvs(7),
    borderWidth: 0.7,
    borderRadius: mvs(10),
  },
  row: {
    alignItems: 'center',
  },
  slotTime: {lineHeight: mvs(20), marginLeft: mvs(10)},
  imgContainer: {
    backgroundColor: colors.secondary,
    height: mvs(27),
    width: mvs(27),
    borderRadius: mvs(5),
    overflow: 'hidden',
  },
  img: {
    height: mvs(72),
    width: mvs(72),
    borderRadius: mvs(36),
    marginRight: mvs(10),
    backgroundColor: colors.lightGray,
  },
  name: {fontSize: mvs(20), lineHeight: mvs(24)},
  address: {fontSize: mvs(13)},
  appoinment: {
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(5),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginTop: mvs(10),
  },
  appoinmentDetails: {
    color: colors.primary,
    fontSize: mvs(18),
    marginHorizontal: mvs(15),
  },
  gifstyle: {
    width: mvs(40),
    height: mvs(40),
  },
});
