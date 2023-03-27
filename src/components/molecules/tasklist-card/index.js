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
const ClientListCard = ({
  item,

  style,
  onPress = () => {},

  children,
}) => {
  const {t} = i18n;
  return (
    <TouchableOpacity style={styles.container}>
      <Bold
        label={item.s_task_name}
        fontSize={mvs(16)}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGray,
          paddingBottom: mvs(5),
        }}
      />
      <View style={{paddingVertical: mvs(5)}}>
        <Row style={{paddingBottom: mvs(5)}}>
          <Regular
            label={'Client Name'}
            fontSize={mvs(13)}
            color={colors.lightGray}
            style={{flex: 0.4}}
          />
          <Regular
            label={item.client_name}
            fontSize={mvs(13)}
            color={colors.lightblack}
            style={{flex: 1}}
          />
        </Row>
        <Row style={{paddingBottom: mvs(5)}}>
          <Regular
            label={'Task Name:'}
            fontSize={mvs(13)}
            color={colors.lightGray}
            style={{flex: 0.4}}
          />
          <Regular
            label={item.s_task_name}
            fontSize={mvs(13)}
            color={colors.lightblack}
            style={{flex: 1}}
          />
        </Row>
        <Row style={{paddingBottom: mvs(5)}}>
          <Regular
            label={'Progress:'}
            fontSize={mvs(13)}
            color={colors.lightGray}
            style={{flex: 0.4}}
          />
          <Regular
            // label={item.progress}
             label={item.progress === 100
              ? 'Completed'
              : item.progress === 50
              ? 'In progress'
              : 'Not Started'}
            fontSize={mvs(13)}
            color={colors.lightblack}
            style={{flex: 1}}
          />
        </Row>
        <Row style={{paddingBottom: mvs(5)}}>
          <Regular
            label={'Created at:'}
            fontSize={mvs(13)}
            color={colors.lightGray}
            style={{flex: 0.4}}
          />
          <Regular
            label={moment(item.created_at).format('ddd, MMM Do YYYY, h:mm A')}
            fontSize={mvs(13)}
            color={colors.lightblack}
            style={{flex: 1}}
          />
        </Row>
        <Row style={{paddingBottom: mvs(5)}}>
          <Regular
            label={'Deadline:'}
            fontSize={mvs(13)}
            color={colors.red}
            style={{flex: 0.4}}
          />
          <Regular
            label={moment(item.end_date).format('ddd, MMM Do YYYY')}
            fontSize={mvs(13)}
            color={colors.red}
            style={{flex: 1}}
          />
        </Row>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>{children}</View>
    </TouchableOpacity>
  );
};
export default React.memo(ClientListCard);
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
