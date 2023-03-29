import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useFormik} from 'formik';
import {t} from 'i18next';
import {goBack} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {editUserData, onUpdatePassword} from 'services/api/api-actions';
import {UTILS} from 'utils';
import {
  updatePasswordValidation,
  updateUserProfileFormValidation,
} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const UpdateUserProfile = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    username: '',
    phone_number: '',
    cnic_no: '',
  };
  const [image, setImage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [saveLoading, setSaveLoading] = React.useState(false);

  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: updateUserProfileFormValidation,
      onUpdate: () => {},
    });

  const [selectedInput, setSelectedInput] = React.useState(
    props?.route?.params?.userInformation || {},
  );
  const onUpdate = async () => {
    try {
      setSaveLoading(true);
      const res = await editUserData({
        username: selectedInput?.username,
        phone_number: selectedInput?.phone_number,
        cnic_no: selectedInput?.cnic_no,
      });

      Alert.alert('Success', ' Profile Updated Saved Successfully');
      goBack();

      // await getDepartments();

      console.log('res of edit user', res);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setSaveLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header1x2x isSearch={false} title={t('Update Profile')} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            // source={IMG.cash}
            source={{uri: image?.uri}}
            resizeMode="contain"
            style={{
              width: mvs(140),
              height: mvs(140),
              borderWidth: 3,
              borderRadius: mvs(70),
              borderColor: colors.primary,
            }}
          />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={async () => {
              try {
                const res = await UTILS._returnImageGallery();
                setImage(res);
              } catch (error) {
                console.log('error', error);
              }
            }}
            style={{
              backgroundColor: colors.white,
              borderRadius: mvs(20),
              padding: mvs(6),
              position: 'absolute',
              right: mvs(110),
              top: mvs(80),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Ionicons name="ios-images" color={colors.primary} size={mvs(16)} />
          </TouchableOpacity>
        </View>
        <PrimaryInput
          keyboardType={'email-address'}
          error={errors?.username}
          label={'Name'}
          placeholder={t('Name')}
          onChangeText={str =>
            setSelectedInput({...selectedInput, username: str})
          }
          value={selectedInput?.username}
        />
        <PrimaryInput
          keyboardType={'number-pad'}
          error={errors?.phone_number}
          label={'Phone No'}
          placeholder={t('Phone No')}
          onChangeText={str =>
            setSelectedInput({...selectedInput, phone_number: str})
          }
          value={selectedInput?.phone_number}
        />
        <PrimaryInput
          keyboardType={'number-pad'}
          error={errors?.cnic_no}
          label={'CNIC'}
          placeholder={t('CNIC')}
          onChangeText={str =>
            setSelectedInput({...selectedInput, cnic_no: str})
          }
          value={selectedInput?.cnic_no}
        />

        <PrimaryButton
          title={'Update'}
          loading={saveLoading}
          onPress={onUpdate}
          containerStyle={styles.button}
          color={colors.white}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default UpdateUserProfile;
