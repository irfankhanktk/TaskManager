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
import {onChangePassword, onUpdatePassword} from 'services/api/api-actions';
import {UTILS} from 'utils';
import {updatePasswordValidation} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const UpdatePassword = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
    new_password: '',
    old_password: '',
  };

  const [loading, setLoading] = React.useState(false);
  const [saveLoading, setSaveLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: updatePasswordValidation,
      onUpdate: () => {},
    });

  const [selectedInput, setSelectedInput] = React.useState(
    props?.route?.params?.userInformation || {},
  );
  console.log('userInformation', props?.route?.params?.userInformation);

  const onUpdate = async () => {
    try {
      setSaveLoading(true);
      const res = await onChangePassword({
        old_password: selectedInput?.old_password,
        new_password: selectedInput?.new_password,
      });

      Alert.alert('Success', ' Password Updated Saved Successfully');
      goBack();

      // await getDepartments();

      console.log('res of update user password', res);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setSaveLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header1x2x isSearch={false} title={t('Update Password')} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          editable={false}
          keyboardType={'email-address'}
          // error={errors?.email}
          label={t('email')}
          placeholder={t('email')}
          // onChangeText={str => setFieldValue('email', str)}

          value={selectedInput?.email}
        />
        <PrimaryInput
          isPassword
          error={
            touched?.old_password && errors?.old_password
              ? errors?.old_password
              : undefined
          }
          placeholder={'********'}
          label={'Old Password'}
          onChangeText={str =>
            setSelectedInput({...selectedInput, old_password: str})
          }
          value={selectedInput?.old_password}
        />
        <PrimaryInput
          isPassword
          error={
            touched?.new_password && errors?.new_password
              ? errors?.new_password
              : undefined
          }
          placeholder={'********'}
          label={t('New Password')}
          onChangeText={str =>
            setSelectedInput({...selectedInput, new_password: str})
          }
          value={selectedInput?.new_password}
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
export default UpdatePassword;
