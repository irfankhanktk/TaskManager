import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { useFormik } from 'formik';
import { t } from 'i18next';
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as IMG from 'assets/images';
import { onSignup, onUpdatePassword } from 'services/api/api-actions';
import { signupFormValidation, updatePasswordValidation } from 'validations';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
import { mvs } from 'config/metrices';
import { colors } from 'config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { shadow } from 'react-native-paper';
import { Clientlistavatar } from 'assets/icons';
import { UTILS } from 'utils';


const AddTask = (props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
    new_password: '',
    old_password: '',
  };
  const [image, setImage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [tasks, setTasks] = React.useState([{
    title: '',
    description: '',
  }]);

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
      <Header1x2x isSearch={false} title={'Add Task'} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.taskContainer}>
          {tasks?.map((item, index) => (
            <View style={styles.inputContainer}>
              <PrimaryInput
                keyboardType={'email-address'}
                // error={errors?.email}
                label={'Task Title'}
                placeholder={t('Task Title')}
                onChangeText={str => {
                  const copy = [...tasks];
                  item.title = str;
                  copy[index] = item;
                  setTasks(copy);
                }}
                onBlur={() => setFieldTouched('Task Title', true)}
                containerStyle={{ height: mvs(40) }}
                style={{ fontSize: mvs(14) }}
                value={item.title}
              />
              <PrimaryInput
                label={'Description'}
                placeholder={t('Description')}
                onChangeText={str => {
                  const copy = [...tasks];
                  item.description = str;
                  copy[index] = item;
                  setTasks(copy);
                }}
                onBlur={() => setFieldTouched('Description', true)}
                containerStyle={{ height: mvs(40) }}
                style={{ fontSize: mvs(14) }}
                value={item.description}
              />
              {tasks?.length > 1 && <TouchableOpacity
                onPress={() => {
                  const copy = [...tasks];
                  copy?.splice(index, 1);
                  setTasks(copy);
                }}
                style={styles.removeBtn}>
                <AntDesign
                  name="minuscircle"
                  size={mvs(15)}
                  color={colors.red}
                />
              </TouchableOpacity>}
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              const copy = [...tasks];
              copy?.push({ title: '', description: '' });
              setTasks(copy);
            }}
            style={styles.plusBtn}>
            <AntDesign
              name="pluscircle"
              size={mvs(30)}
              color={colors.green}
            />
          </TouchableOpacity>
        </View>
        <PrimaryButton
          loading={loading}
          // disabled={
          //   Object.keys(errors)?.length > 0 ||
          //   Object.keys(touched)?.length === 0
          // }
          title={t('Update')}
          onPress={() => dispatch(onUpdatePassword(values, setLoading, props))}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default AddTask;
