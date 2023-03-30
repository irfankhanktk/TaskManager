import Header1x2x from 'components/atoms/taskheaders /header-1x-2x';
import {Loader} from 'components/atoms/loader';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {EmptyList} from 'components/molecules/empty-list';
import {colors} from 'config/colors';
import {APPOINTMNETSTATUS} from 'config/constants';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack, navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {
  deleteTask,
  getAppointmentsList,
  getTaskList,
  onChangeAppoinmentStatus,
} from 'services/api/api-actions';
import i18n from 'translation';
import styles from './styles';
import {SearchBar} from 'react-native-screens';
import {SearchInput} from 'components/atoms/inputs';
import {mvs} from 'config/metrices';
import * as IMG from 'assets/images';
import TaskListCard from 'components/molecules/tasklist-card';
import * as SVGS from 'assets/icons';
import {useIsFocused} from '@react-navigation/native';

const TaskList = props => {
  const {userInfo} = useAppSelector(s => s?.user);
  const {taskTitle, id} = props?.route?.params || {};
  console.log(userInfo);
  const [loading, setLoading] = React.useState(true);
  const [taskList, setTaskList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  const isFocus = useIsFocused();

  const getTask = async () => {
    try {
      // setLoading(true);
      const res = await getTaskList({id: id || 2});
      console.log('res of tasklist ==>>>>>', res);
      setTaskList(res?.tasksList || []);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    // ()();
    getTask();
  }, [isFocus]);

  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = taskList?.filter(item => {
        const cond =
          searchTerm === '' ||
          item?.s_task_name?.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filtered);
    }
  }, [searchTerm]);
  const onDelete = async id => {
    Alert.alert('Delete', 'Are you sure you want to Delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            setLoading(true);
            const res = await deleteTask({id: id});
            Alert.alert('Success', 'Task Deleted Successfully');

            await getTask();
            console.log('res of taskdata', res);
          } catch (error) {
            console.log('error=>', error);
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Header1x2x title={taskTitle || 'Tasks List'} />
      <SearchInput
        containerStyle={{marginHorizontal: mvs(20)}}
        onChangeText={setSearchTerm}
      />

      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            ListEmptyComponent={<EmptyList label={' No Result'} />}
            data={searchTerm?.trim()?.length ? searchList : taskList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return (
                <TaskListCard
                  item={item}
                  onPressDelete={() => onDelete(item?.id)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
    </View>
  );
};
export default TaskList;
