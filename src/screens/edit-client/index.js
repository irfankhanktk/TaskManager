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
import {mvs} from '../../config/metrices';
import PrimaryInput from '../../components/atoms/inputs/index';

import moment from 'moment';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {ScrollView} from 'react-native-gesture-handler';
import {addClient, editClientList} from 'services/api/api-actions';
import {goBack} from 'navigation/navigation-ref';

const EditClient = props => {
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [selectedClient, setSelectedClient] = React.useState(
    props?.route?.params?.item || {},
  );
  console.log('selectedClient', selectedClient);
  const onSave = async () => {
    try {
      setSaveLoading(true);
      const res = selectedClient?.id
        ? await editClientList({
            id: selectedClient?.id,
            client_name: selectedClient?.client_name,
            c_email: selectedClient?.c_email,
            c_mobile_no: selectedClient?.c_mobile_no,
            address_1: selectedClient?.address_1,
            address_2: selectedClient?.address_2,
            cp_name: selectedClient?.cp_name,
            cp_email: selectedClient?.cp_email,
            cp_mobile_no: selectedClient?.cp_mobile_no,
          })
        : await addClient({
            client_name: selectedClient?.client_name,
            c_email: selectedClient?.c_email,
            c_mobile_no: selectedClient?.c_mobile_no,
            address_1: selectedClient?.address_1,
            address_2: selectedClient?.address_2,
            cp_name: selectedClient?.cp_name,
            cp_email: selectedClient?.cp_email,
            cp_mobile_no: selectedClient?.cp_mobile_no,
          });

      Alert.alert('Success', 'Saved Successfully');
      goBack();

      // await getDepartments();

      console.log('res of edit client', res);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setSaveLoading(false);
    }
  };
  return (
    <View style={[styles.contentContainerStyle]}>
      <Header1x2x
        // label={`${department?.id ? 'Edit' : 'Add'} Client`}
        title={`${selectedClient?.id ? 'Edit' : 'Add'} Client`}
        // fontSize={mvs(20)}
        color={colors.primary}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <View style={styles.container}>
          <PrimaryInput
            keyboardType={'email-address'}
            // error={errors?.email}
            label={'Client Name'}
            placeholder={'Client Name'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, client_name: str})
            }
            value={selectedClient?.client_name}
          />
          <PrimaryInput
            keyboardType={'number-pad'}
            // error={errors?.email}
            label={'Phone No'}
            placeholder={'Phone No'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, c_mobile_no: str})
            }
            value={selectedClient?.c_mobile_no?.toString()}
          />
          <PrimaryInput
            // keyboardType={'email-address'}
            // error={errors?.email}
            label={'Client Email'}
            placeholder={'Client Email'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, c_email: str})
            }
            value={selectedClient?.c_email}
          />
          <PrimaryInput
            keyboardType={'email-address'}
            // error={errors?.email}
            label={'Current Address'}
            placeholder={'Current Address'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, address_1: str})
            }
            value={selectedClient?.address_1}
          />
          <PrimaryInput
            keyboardType={'email-address'}
            // error={errors?.email}
            label={'Address (Optional)'}
            placeholder={'Address (Optional)'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, address_2: str})
            }
            value={selectedClient?.address_2}
          />
          <PrimaryInput
            keyboardType={'email-address'}
            // error={errors?.email}
            label={'Contact Person Name'}
            placeholder={'Contact Person Name'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, cp_name: str})
            }
            value={selectedClient?.cp_name}
          />
          <PrimaryInput
            keyboardType={'email-address'}
            // error={errors?.email}
            label={'Contact Person Email'}
            placeholder={'Contact Person Email'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, cp_email: str})
            }
            value={selectedClient?.cp_email}
          />
          <PrimaryInput
            keyboardType={'number-pad'}
            // error={errors?.email}
            label={'Contact Person Phone'}
            placeholder={'Contact Person Phone'}
            onChangeText={str =>
              setSelectedClient({...selectedClient, cp_mobile_no: str})
            }
            value={selectedClient?.cp_mobile_no?.toString()}
          />
          <PrimaryButton
            // disabled={
            //   Object.keys(errors).length > 0 ||
            //   Object.keys(touched).length === 0
            // }
            color={colors.white}
            loading={saveLoading}
            onPress={onSave}
            // onPress={() => navigate('DrawerNavigation')}
            title={'Save'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default EditClient;
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
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
