import {DatePicker} from 'components/atoms/date-picker';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useFormik} from 'formik';
import {t} from 'i18next';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {onUpdatePassword} from 'services/api/api-actions';
import Medium from 'typography/medium-text';
import {updatePasswordValidation} from 'validations';
import {PrimaryButton} from '../../components/atoms/buttons';
import PrimaryInput, {
  InputWithIcon,
  MulDropdownInput,
} from '../../components/atoms/inputs';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import styles from './styles';

const AddTask = props => {
  const {navigation} = props;
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
    reminderType: '',
    taskType: 'One Time',
    repeatType: '',
  });
  const [tasks, setTasks] = React.useState([
    {
      title: '',
      description: '',
    },
  ]);
  const [managers, setManagers] = React.useState([
    {id: 1, title: 'Irfan'},
    {id: 2, title: 'Khan'},
    {id: 3, title: 'Moin'},
    {id: 4, title: 'kamal'},
  ]);
  const clients = [
    {id: 1, title: 'Irfan'},
    {id: 2, title: 'Khan'},
  ];
  const reminderTypes = [
    {id: 1, title: 'Before 30 minutes'},
    {id: 2, title: 'Before 1 hour'},
    {id: 3, title: 'Before 1 day'},
    {id: 4, title: 'Before 1 week'},
    {id: 5, title: 'After 30 minutes'},
    {id: 6, title: 'After 1 hour'},
  ];
  const repeatTypes = [
    {id: 1, title: 'Daily'},
    {id: 2, title: 'Week'},
    {id: 3, title: '2 Weeeks'},
    {id: 4, title: '1 Month'},
    {id: 5, title: '3 Month'},
    {id: 6, title: '6 Month'},
    {id: 7, title: '1 Year'},
  ];
  const [selectedDepartment, setSelectedDepartment] = React.useState({});
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
      <Header1x2x isSearch={false} title={'Add Task'} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.taskContainer}>
          {tasks?.map((item, index) => (
            <View
              key={index}
              style={{
                ...styles.inputContainer,
                borderBottomWidth:
                  index === tasks?.length - 1 ? 0 : StyleSheet.hairlineWidth,
              }}>
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
                containerStyle={{height: mvs(40)}}
                style={{fontSize: mvs(14)}}
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
                containerStyle={{height: mvs(40)}}
                style={{fontSize: mvs(14)}}
                value={item.description}
              />
              {tasks?.length > 1 && (
                <TouchableOpacity
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
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              const copy = [...tasks];
              copy?.push({title: '', description: ''});
              setTasks(copy);
            }}
            style={styles.plusBtn}>
            <AntDesign name="pluscircle" size={mvs(30)} color={colors.green} />
          </TouchableOpacity>
        </View>
        <MulDropdownInput
          value={''}
          label="Select Manager"
          onChangeText={setManagers}
          items={managers}
          icon={'down'}
        />
        <Row style={styles.row}>
          <InputWithIcon
            containerStyle={styles.width}
            editable={true}
            value={'khan'}
            id={payload?.despartment}
            label="Select Department"
            onChangeText={v => setPayload({...payload, despartment: v})}
            items={managers}
            icon={'down'}
          />
          <InputWithIcon
            containerStyle={styles.width}
            value={clients?.find(x => x?.id === payload?.client)?.title || ''}
            id={payload?.client}
            label="Select Clients"
            onChangeText={v => setPayload({...payload, client: v})}
            items={clients}
            icon={'down'}
          />
        </Row>
        <Row style={styles.row}>
          <DatePicker
            style={styles.width}
            onChangeText={date => setPayload({...payload, startDate: date})}>
            <InputWithIcon
              editable
              value={payload?.startDate}
              id={payload?.client}
              label="Start Date"
              onChangeText={v => {}}
              items={[]}
            />
          </DatePicker>
          <DatePicker
            style={styles.width}
            onChangeText={date => setPayload({...payload, endDate: date})}>
            <InputWithIcon
              editable
              value={payload?.endDate}
              label="End Date"
              onChangeText={v => {}}
              items={[]}
            />
          </DatePicker>
        </Row>
        <Row style={styles.row}>
          <DatePicker
            style={styles.width}
            mode="time"
            onChangeText={date => setPayload({...payload, time: date})}>
            <InputWithIcon
              icon="clockcircleo"
              editable
              value={payload?.time}
              label="Task Time"
              onChangeText={v => {}}
              items={[]}
            />
          </DatePicker>
          <InputWithIcon
            containerStyle={styles.width}
            value={
              reminderTypes?.find(x => x?.id === payload?.reminderType)
                ?.title || ''
            }
            id={payload?.reminderType}
            label="Select Reminder"
            onChangeText={v => setPayload({...payload, reminderType: v})}
            items={reminderTypes}
            icon={'down'}
          />
        </Row>
        <Medium
          label={'Select Task Type'}
          style={{
            alignSelf: 'flex-start',
            color: colors.primary,
            marginBottom: mvs(3),
            paddingHorizontal: mvs(5),
          }}
        />
        <Row style={{marginBottom: mvs(20)}}>
          <PrimaryButton
            title={t('One Time')}
            onPress={() => setPayload({...payload, taskType: 'One Time'})}
            textStyle={{
              color:
                payload?.taskType !== 'One Time' ? colors.black : colors.white,
            }}
            containerStyle={{
              width: '50%',
              borderRadius: 0,
              borderTopLeftRadius: mvs(10),
              backgroundColor:
                payload?.taskType == 'One Time'
                  ? colors.primary
                  : colors.secondary,
            }}
          />
          <PrimaryButton
            title={t('Recurring')}
            onPress={() => setPayload({...payload, taskType: 'Recurring'})}
            textStyle={{
              color:
                payload?.taskType === 'One Time' ? colors.black : colors.white,
            }}
            containerStyle={{
              width: '50%',
              borderRadius: 0,
              borderTopRightRadius: mvs(10),
              backgroundColor:
                payload?.taskType !== 'One Time'
                  ? colors.primary
                  : colors.secondary,
            }}
          />
        </Row>
        {payload?.taskType !== 'One Time' && (
          <InputWithIcon
            containerStyle={{marginBottom: mvs(20)}}
            value={
              repeatTypes?.find(x => x?.id === payload?.repeatType)?.title || ''
            }
            id={payload?.repeatType}
            label="Repeat After"
            onChangeText={v => setPayload({...payload, repeatType: v})}
            items={repeatTypes}
            icon={'down'}
          />
        )}
        <PrimaryButton
          loading={loading}
          title={t('Add')}
          // onPress={() => dispatch(onUpdatePassword(values, setLoading, props))}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default AddTask;
