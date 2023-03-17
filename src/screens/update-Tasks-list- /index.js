import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DatePicker} from 'components/atoms/date-picker';
import Header1x2x from 'components/atoms/updatetasklistheader/header-1x-2x';
import {useFormik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {onUpdateProfile} from 'services/api/api-actions';
import i18n from 'translation';
import {
  updateProfileFormValidation,
  updateTaskListFormValidation,
} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput, {InputWithIcon} from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch, useAppSelector} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'UpdateProfile'>;

const UpdateProfile = (props: props) => {
  const {navigation} = props;
  const {t} = i18n;
  const {userInfo} = useAppSelector(s => s?.user);
  console.log('userinfo======>', userInfo);
  const dispatch = useAppDispatch();
  const initialValues = userInfo ?? {
    client: '',
    client: '',
    task_type: '',
    created_at: '',
    deadline: '',
  };
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: updateTaskListFormValidation,
      onSubmit: () => {},
    });
  console.log('errors=>', errors);
  // React.useEffect(() => {
  //   setFieldTouched('first_name', true);
  //   setFieldTouched('email', true);
  //   setFieldTouched('phone', true);
  // }, []);
  return (
    <View style={styles.container}>
      <Header1x2x isSearch={false} title={'Task List Update'} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          error={touched?.client && errors?.client ? t(errors?.client) : ''}
          label={'Client'}
          placeholder={'Client'}
          onChangeText={str => setFieldValue('client', str)}
          onBlur={() => setFieldTouched('client', true)}
          value={values.client}
        />
        <PrimaryInput
          error={touched?.stage && errors?.stage ? t(errors?.stage) : ''}
          label={'Stage'}
          placeholder={'Stage'}
          onChangeText={str => setFieldValue('stage', str)}
          onBlur={() => setFieldTouched('stage', true)}
          value={values.stage}
        />
        <PrimaryInput
          error={
            touched?.task_type && errors?.task_type ? t(errors?.task_type) : ''
          }
          label={'Task Type'}
          placeholder={'Task Type'}
          onChangeText={str => setFieldValue('task_type', str)}
          onBlur={() => setFieldTouched('task_type', true)}
          value={`${values.task_type}`}
        />
        <DatePicker
          onChangeText={(str: string) => setFieldValue('created_at', str)}>
          <PrimaryInput
            icon="calendar"
            editable={false}
            // error={
            //   touched?.created_at && errors?.created_at
            //     ? t(errors?.created_at)
            //     : ''
            // }
            label={'Created At'}
            placeholder={t('Created At')}
            onChangeText={str => setFieldValue('created_at', str)}
            onBlur={() => setFieldTouched('created_at', true)}
            value={`${values.created_at}`}
          />
        </DatePicker>
        <PrimaryInput
          error={
            touched?.deadline && errors?.deadline ? t(errors?.deadline) : ''
          }
          label={'Deadline'}
          placeholder={'Deadline'}
          onChangeText={str => setFieldValue('deadline', str)}
          onBlur={() => setFieldTouched('deadline', true)}
          value={`${values.deadline}`}
        />

        <PrimaryButton
          loading={loading}
          // disabled={
          //   Object.keys(errors)?.length > 0 ||
          //   Object.keys(touched)?.length === 0
          // }
          title={'Update'}
          // onPress={onSubmit}
          onPress={() => {
            dispatch(onUpdateProfile({...values}, setLoading, props));
          }}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default UpdateProfile;
