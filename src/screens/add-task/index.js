import { DatePicker } from 'components/atoms/date-picker';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useFormik } from 'formik';
import { t } from 'i18next';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { onUpdatePassword } from 'services/api/api-actions';
import { updatePasswordValidation } from 'validations';
import { PrimaryButton } from '../../components/atoms/buttons';
import PrimaryInput, { InputWithIcon, MulDropdownInput } from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../hooks/use-store';
import styles from './styles';


const AddTask = (props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
    new_password: '',
    old_password: '',
  };
  const [image, setImage] = React.useState('');
  const [ddDepartmentModal, setDdDepartmentModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    despartment: '',
    client: '',
    managers: '',
    tasks: '',
    startDate: '',
    endDate: '',
    time: '',
  });
  const [tasks, setTasks] = React.useState([{
    title: '',
    description: '',
  }]);
  const [managers, setManagers] = React.useState([
    { id: 1, title: 'Irfan' },
    { id: 2, title: 'Khan' }]);
  const clients = [
    { id: 1, title: 'Irfan' },
    { id: 2, title: 'Khan' }];
  const [selectedDepartment, setSelectedDepartment] = React.useState({});
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
            <View key={index} style={styles.inputContainer}>
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
        <InputWithIcon
          editable={true}
          value={'khan'}
          id={payload?.despartment}
          label='Select Department'
          onChangeText={(v) => setPayload({ ...payload, despartment: v })}
          items={managers} icon={'down'} />
        <MulDropdownInput
          value={managers?.filter(x => x?.selected)?.map(x => x?.title)?.join()}
          label='Select Manager'
          onChangeText={setManagers}
          items={managers} icon={'down'} />
        <InputWithIcon
          value={clients?.find(x => x?.id === payload?.client)?.title || ''}
          id={payload?.client}
          label='Select Clients'
          onChangeText={(v) => setPayload({ ...payload, client: v })}
          items={clients} icon={'down'} />
        <DatePicker
          onChangeText={(date) => setPayload({ ...payload, startDate: date })}>
          <InputWithIcon
            editable
            value={payload?.startDate}
            id={payload?.client}
            label='Start Date'
            onChangeText={(v) => { }}
            items={[]} />
        </DatePicker>
        <DatePicker
          onChangeText={(date) => setPayload({ ...payload, endDate: date })}>
          <InputWithIcon
            editable
            value={payload?.endDate}
            label='End Date'
            onChangeText={(v) => { }}
            items={[]} />
        </DatePicker>
        <DatePicker
          mode='time'
          onChangeText={(date) => setPayload({ ...payload, time: date })}>
          <InputWithIcon
            editable
            value={payload?.time}
            label='Task Time'
            onChangeText={(v) => { }}
            items={[]} />
        </DatePicker>
        <PrimaryButton
          loading={loading}
          title={t('Update')}
          onPress={() => dispatch(onUpdatePassword(values, setLoading, props))}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default AddTask;
