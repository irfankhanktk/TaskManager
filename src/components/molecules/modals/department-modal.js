import {PrimaryButton} from 'components/atoms/buttons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {mvs} from '../../../config/metrices';
import DescriptionCard from '../description-card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {shadow} from 'react-native-paper';

const DepartmentModal = ({
  style,
  value,
  visible = false,
  onClose = () => {},
  onChangeText,
  department,
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose(false)}
      onBackButtonPress={() => onClose(false)}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <View style={styles.departmenstlistcontainer}>
          <Row
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.lightGray,
              paddingBottom: mvs(5),
            }}>
            <Bold label={department?.dep_title} fontSize={mvs(16)} />
          </Row>
          <View style={{paddingVertical: mvs(5)}}>
            <Row style={{paddingBottom: mvs(5)}}>
              <Regular
                label={'Department Name:'}
                fontSize={mvs(13)}
                color={colors.lightGray}
                style={{flex: 0.7}}
              />
              <Regular
                label={department?.dep_title}
                fontSize={mvs(13)}
                color={colors.lightblack}
                style={{flex: 1}}
              />
            </Row>
            <Row style={{paddingBottom: mvs(5)}}>
              <Regular
                label={'Area:'}
                fontSize={mvs(13)}
                color={colors.lightGray}
                style={{flex: 0.7}}
              />
              <Regular
                label={department?.description}
                fontSize={mvs(13)}
                color={colors.lightblack}
                style={{flex: 1}}
              />
            </Row>
            <Row style={{paddingBottom: mvs(5)}}>
              <Regular
                label={'Strength:'}
                fontSize={mvs(13)}
                color={colors.lightGray}
                style={{flex: 0.7}}
              />
              <Regular
                label={department?.strength}
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
                style={{flex: 0.7}}
              />
              <Regular
                label={moment(department.created_at).format(
                  'ddd, MMM Do YYYY, h:mm A',
                )}
                fontSize={mvs(13)}
                color={colors.lightblack}
                style={{flex: 1}}
              />
            </Row>
            <Row style={{paddingBottom: mvs(5)}}>
              <Regular
                label={'Updated at:'}
                fontSize={mvs(13)}
                color={colors.lightGray}
                style={{flex: 0.7}}
              />
              <Regular
                label={moment(department.updated_at).format(
                  'ddd, MMM Do YYYY, h:mm A',
                )}
                fontSize={mvs(13)}
                color={colors.lightblack}
                style={{flex: 1}}
              />
            </Row>
          </View>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default DepartmentModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    // backgroundColor: colors.transparent,
    // flex: 1,

    // justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  bar: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: mvs(20),
    color: colors.primary,
  },
  des: {marginVertical: mvs(5)},
  rowRating: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: mvs(20),
  },
  rateTxt: {
    marginLeft: mvs(10),
    lineHeight: mvs(20),
    color: colors.black,
    fontSize: mvs(16),
  },
  container: {
    // height: mvs(572),

    backgroundColor: colors.white,
    padding: mvs(15),
    borderTopRightRadius: mvs(20),
    borderTopLeftRadius: mvs(20),
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: mvs(Platform.OS === 'ios' ? 40 : 20),
  },
  row: {alignItems: 'center'},
  dollar: {marginHorizontal: mvs(20), fontSize: mvs(28)},
  button: {height: mvs(63), width: '45%'},
  cross: {padding: mvs(20), alignSelf: 'flex-end', position: 'absolute'},

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
  departmenstlistcontainer: {
    marginBottom: mvs(20),
    backgroundColor: colors.white,
    marginHorizontal: mvs(5),
    borderRadius: mvs(10),
    borderLeftWidth: mvs(10),
    borderLeftColor: colors.primary,
    padding: mvs(12),
  },
});
