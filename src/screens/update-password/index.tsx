import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useFormik } from 'formik';
import { t } from 'i18next';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { onUpdatePassword } from 'services/api/api-actions';
import { UTILS } from 'utils';
import { updatePasswordValidation } from 'validations';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const UpdatePassword = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
    new_password: '',
    old_password: '',
  };
  const [image, setImage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: updatePasswordValidation,
      onSubmit: () => { },
    });
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
            source={{ uri: image?.uri }}
            resizeMode="contain"
            style={{
              width: mvs(140),
              height: mvs(140),
              borderWidth: 3,
              borderRadius: mvs(70),
              borderColor: colors.primary,
            }}
          />
          {/* <Clientlistavatar
            width={mvs(140)}
            height={mvs(140)}
            style={{
              alignSelf: 'center',
              borderWidth: 4,
              borderRadius: mvs(70),
              borderColor: colors.primary,
            }}
          /> */}
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
          error={errors?.email}
          label={t('email')}
          placeholder={t('email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
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
          onChangeText={str => setFieldValue('old_password', str)}
          onBlur={() => setFieldTouched('old_password', true)}
          value={values.old_password}
        />
        <PrimaryInput
          isPassword
          error={
            touched?.new_password && errors?.new_password
              ? errors?.new_password
              : undefined
          }
          placeholder={'********'}
          label={t('Confirm Password')}
          onChangeText={str => setFieldValue('new_password', str)}
          onBlur={() => setFieldTouched('new_password', true)}
          value={values.new_password}
        />
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
export default UpdatePassword;
