import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {useFormik} from 'formik';
import {t} from 'i18next';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import * as IMG from 'assets/images';
import {onSignup, onUpdatePassword} from 'services/api/api-actions';
import {signupFormValidation, updatePasswordValidation} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {shadow} from 'react-native-paper';
import {Clientlistavatar} from 'assets/icons';
import {UTILS} from 'utils';

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const AddTask = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
    new_password: '',
    old_password: '',
  };
  const [image, setImage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: updatePasswordValidation,
      onSubmit: () => {},
    });
  return (
    <View style={styles.container}>
      <Header1x2x isSearch={false} title={t('Update Profile')} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          keyboardType={'email-address'}
          // error={errors?.email}
          label={'Task Title'}
          placeholder={t('Task Title')}
          onChangeText={str => setFieldValue('Task Title', str)}
          onBlur={() => setFieldTouched('Task Title', true)}
          // value={values.tasktitle}
        />
        <PrimaryInput
          // error={
          //   touched?.short_description && errors?.short_description
          //     ? t(errors?.short_description)
          //     : ''
          // }
          label={'Description'}
          placeholder={t('Description')}
          onChangeText={str => setFieldValue('Description', str)}
          onBlur={() => setFieldTouched('Description', true)}
          // value={`${values.description}`}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            marginTop: mvs(-12),
          }}>
          <Ionicons
            name="ios-add-circle-outline"
            size={mvs(30)}
            color={colors.green}
          />
        </TouchableOpacity>

        <PrimaryButton
          loading={loading}
          disabled={
            Object.keys(errors)?.length > 0 ||
            Object.keys(touched)?.length === 0
          }
          title={t('Update')}
          onPress={() => dispatch(onUpdatePassword(values, setLoading, props))}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default AddTask;
